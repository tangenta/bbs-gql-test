unit_test("CreateSchoolHeat", () =>
    after_signUp(auth => {
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
      return createSchoolHeat(schoolHeat, auth).then(res => {
        // console.log(res);
        assertEq(res.title, schoolHeat.title);
        assertEq(res.content.items.length, 4);
      })
    })
);

unit_test("AllSchoolHeats", () =>
  after_n_schoolheat_publisth(10, (_, __, ids) =>
    allSchoolHeats().then(res => {
        assert(eqSet(new Set(ids), new Set(res.schoolHeats.map(i => i.id))));
        assert(res.totalCount, 5);
      }
    )
  )
);

