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

unit_test("deleteFound", () => 
    after_publishFound((auth, foundId) => 
        deleteFound(foundId, auth).then(res => 
            assert(res.ok)
        )
    )
);

unit_test("claimFound", () =>
    after_publishFound((auth, foundId, foundObj) =>
        after_signUp((auth, uname, pass, nick) => 
            claimFound(foundId, auth).then(res => {
                assert(res.ok);
                return foundInfo(foundId).then(res => 
                    assertEq(res.claimer.username, nick)
                )
            })
        )
    )
)