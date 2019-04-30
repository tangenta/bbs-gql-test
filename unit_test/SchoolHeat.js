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
}

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

unit_test("CreateSchoolHeat", () =>
    after_signUp(auth => {
      return createSchoolHeat(schoolHeat, auth).then(res => {
        assertEq(res.title, schoolHeat.title);
        assertEq(res.content.items.length, 4);
      })
    })
);

unit_test("AllSchoolHeats", () =>
  after_n_schoolheat_publisth(10, (_, __, ids) =>
    allSchoolHeats().then(res => {
        assert(eqSet(new Set(ids), new Set(res.schoolHeats.map(i => i.id))));
        assertEq(res.totalCount, 10);
      }
    )
  )
);

unit_test("SchoolHeatInfo", () =>
  after_signUp(auth => {
    return createSchoolHeat(schoolHeat, auth).then(res => {
      schoolHeatInfo(res.id).then(res => {
        assertEq(res.title, schoolHeat.title)
      })
    })
  })
);

unit_test("SchoolHeatsOfAuthor", () =>
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

unit_test("DeleteSchoolHeat", () =>
  after_signUp(auth => {
    return createSchoolHeat(schoolHeat, auth).then(res => {
      deleteSchoolHeat(res.id, auth).then(res => {
        assert(res.ok)
      })
    })
  })
);


