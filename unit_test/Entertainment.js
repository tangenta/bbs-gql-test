const after_create_n_entertainments = (nTimes, func) => {
    const mockObj = {
        title: "Sparks fly",
        content: {
            elems: [
                {type: "Text", str: "Drop everything now"},
                {type: "Text", str: "Leave me in the pouring rain"},
            ]
        }
    }
    return after_n_things_created(nTimes, mockObj, 
        (auth, item) => createEntertainment(item, auth), res => res.id, func);
};

unit_test("createEntertainment", () => 
    after_create_n_entertainments(1, (auth, items, ids) => 
        assert(true)
    )
);

unit_test("deleteEntertainment", () =>
    after_create_n_entertainments(1, (auth, items, ids) =>
        after_signUp(auth2 => 
            deleteEntertainment(ids[0], auth2).then(res => {
                assertEq(res.errCode, 31);
                return deleteEntertainment(ids[0], auth).then(res => {
                    assert(res.ok);
                    return entertainmentInfo(ids[0]).then(res => 
                        assertEq(res.errCode, 61)
                    );
                });
            })
        )
    )
);

unit_test("entertainmentInfo", () => 
    after_create_n_entertainments(1, (auth, items, ids) =>
        entertainmentInfo(ids[0]).then(res => {
            assertEq(items[0].title, res.title);
            assertEq(items[0].content.elems[1].str, res.content.items[1].text);
        })
    )
);

unit_test_only("allEntertainments", () => 
    after_create_n_entertainments(5, (auth, items, ids) =>
        allEntertainments(1, 4).then(res => {
            assertEq(res.totalCount, 5);
            assertEq(res.entertainments.length, 4);
        })
    )
);