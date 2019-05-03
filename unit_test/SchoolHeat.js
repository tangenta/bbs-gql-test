const after_n_schoolheat_publisth = (nTimes, func) => {
  const mockObj = {
    title: "ttttz",
    content: {
      elems: [
        {type: "Picture", str: "aGVsbG93b3JsZCE="},
        {type: "Text", str: "I close my eyes, Oh God I think I'm falling"},
        {type: "Text", str: "When you call my name it's like a little prayer"},
      ]
    }
  };
  return after_n_things_created(nTimes, mockObj,
    (auth, item) => createSchoolHeat(item, auth), res => res.id, func);
};

const schoolHeat = {
  title: "A Title",
  content: {
    elems: [
      {type: "Picture", str: "aGVsbG93b3JsZCE="},
      {type: "Text", str: "I close my eyes, Oh God I think I'm falling"},
      {type: "Picture", str: "aGVsbG93b3JsZCE="},
      {type: "Text", str: "When you call my name it's like a little prayer"},
    ]
  }
};

const comment = (postId) => ({
  postIdCommenting: postId,
  content: {
    elems: [
      {type: "Text", str: "When you call my name it's like a little prayer"},
    ]
  }
});

const reply = (postId, commentId, replyTo) => ({
  postIdReplying: postId,
  commentIdReplying: commentId,
  content: {
    elems: [
      {type: "Text", str: "I close my eyes, Oh God I think I'm falling"},
    ]
  },
  replyTo: replyTo
});

unit_test("createSchoolHeat", () =>
  after_signUp(auth => {
    return createSchoolHeat(schoolHeat, auth).then(res => {
      assertEq(res.title, schoolHeat.title);
      assertEq(res.content.items.length, 4);
    })
  })
);

unit_test("schoolHeatInfo", () =>
  after_signUp(auth => {
    return createSchoolHeat(schoolHeat, auth).then(res => {
      schoolHeatInfo(res.id).then(res => {
        assertEq(res.title, schoolHeat.title)
      })
    })
  })
);

unit_test("deleteSchoolHeat", () =>
  after_signUp(auth => {
    return createSchoolHeat(schoolHeat, auth).then(res => {
      deleteSchoolHeat(res.id, auth).then(res => {
        assert(res.ok)
      })
    })
  })
);

unit_test("allSchoolHeats", () =>
  after_n_schoolheat_publisth(10, (_, __, ids) =>
    allSchoolHeats().then(res => {
        assert(eqSet(new Set(ids), new Set(res.schoolHeats.map(i => i.id))));
        assertEq(res.totalCount, 10);
      }
    )
  )
);

unit_test("schoolHeatsOfAuthor", () =>
  after_n_schoolheat_publisth(10, (auth, __, ids) =>
    currentUser(auth).then(userid =>
      schoolHeatsOfAuthor(userid.userId, 2, 4).then(res => {
          assert(eqSet(new Set(ids.reverse().slice(2, 6)), new Set(res.schoolHeats.map(i => i.id))));
          assertEq(res.totalCount, 10);
          assertEq(res.schoolHeats.length, 4);
        }
      )
    )
  )
);

unit_test("createSchoolHeatComment", () =>
  after_signUp(auth1 =>
    createSchoolHeat(schoolHeat, auth1).then(res =>
      after_signUp(auth2 =>
        createSchoolHeatComment(comment(res.id), auth2).then(res2 =>
          assertEq(res2.content.items[0].text, comment().content.elems[0].str)
        )
      )
    )
  ));

unit_test("deleteSchoolHeatComment", () =>
  after_signUp(auth1 =>
    createSchoolHeat(schoolHeat, auth1).then(res =>
      after_signUp(auth2 =>
        createSchoolHeatComment(comment(res.id), auth2).then(res2 =>
          deleteSchoolHeatComment(res.id, res2.id, auth1).then(res3 => {
              assertEq(res3.errCode, 31);
              return deleteSchoolHeatComment(res.id, res2.id, auth2).then(res4 =>
                assert(res4.ok)
              );
            }
          )
        )
      )
    )
  ));

unit_test("createSchoolHeatCommentReply", () =>
  after_signUp(auth1 =>
    createSchoolHeat(schoolHeat, auth1).then(res =>
      after_signUp(auth2 =>
        createSchoolHeatComment(comment(res.id), auth2).then(res2 =>
          after_signUp(auth3 =>
            createSchoolHeatCommentReply(reply(res.id, res2.id), auth3).then(res3 =>
              assertEq(res3.content.items[0].text, reply().content.elems[0].str)
            )
          )
        )
      )
    )
  ));

unit_test("deleteSchoolHeatCommentReply", () =>
  after_signUp(auth1 =>
    createSchoolHeat(schoolHeat, auth1).then(res =>
      after_signUp(auth2 =>
        createSchoolHeatComment(comment(res.id), auth2).then(res2 =>
          after_signUp(auth3 =>
            createSchoolHeatCommentReply(reply(res.id, res2.id), auth3).then(res3 =>
              deleteSchoolHeatCommentReply(res.id, res2.id, res3.id, auth3).then(res4 =>
                assert(res4.ok)
              )
            )
          )
        )
      )
    )
  ));
