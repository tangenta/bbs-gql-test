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