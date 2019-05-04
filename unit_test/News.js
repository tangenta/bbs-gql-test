const anews = {
  title: "News Title",
  content: {
    elems: [
      {type: "Text", str: "So needless to say"},
      {type: "Text", str: "It's no better to be safe than sorry"},
      {type: "Picture", str: "aGVsbG93b3JsZCE="},
    ]
  },
  pictureBase64: "aGVsbG93b3JsZCE="
};

const admin = {username: "admin", password: "letmein"};

unit_test("create news & news info", () =>
  login(admin).then(res =>
    createNews(anews, res.token).then(res1 =>
      newsInfo(res1.id).then(res2 =>
        assertEq(res2.title, anews.title)
      )
    )
  )
);

unit_test("delete news & news", () =>
  login(admin).then(res =>
    createNews(anews, res.token).then(res1 =>
      news().then(res2 => {
          assertEq(res2.newss[0].title, anews.title);
          return deleteNews(res1.id, res.token).then(res2 => {
              assert(res2.ok);
              return newsInfo(res1.id).then(res3 =>
                assertEq(res3.errCode, 96)
              )
            }
          )
        }
      )
    )
  )
);

unit_test("edit news", () =>
  login(admin).then(res =>
    createNews(anews, res.token).then(res1 =>
      editNews(res1.id, {title: "new title"}, res.token).then(() =>
        newsInfo(res1.id).then(res2 => {
            assertEq(res2.title, "new title");
            editNews(res1.id, {content: {elems: [{type: "Text", str: "hey"}]}}, res.token).then(_ =>
              newsInfo(res1.id).then(res3 =>
                assertEq(res3.content.items[0].text, "hey")
              )
            )
          }
        )
      )
    )
  )
);
