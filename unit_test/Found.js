unit_test("createFound", () =>
    after_signUp(auth => {
        const foundItem = {
            itemName: "testItem",
            description: "this is description",
            position: "position",
            pictureBase64: "aGVsbG93b3JsZCE=",
            contact: "12345678"
        };
        return createFound(foundItem, auth).then(res =>
            assertEq(res.name, foundItem.itemName)
        )
    })
);

unit_test("allFounds" , () => 
    after_n_lost_or_found_publish("found", 5, () =>
        allFounds(10, 2).then(res => 
            assertEq(res.totalCount, 5)
        )
    )
)