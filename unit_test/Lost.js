unit_test("createLost", () =>
    after_signUp(auth => {
        const lostItem = {
            itemName: "testItem",
            description: "this is description",
            position: "position",
            pictureBase64: "aGVsbG93b3JsZCE=",
            contact: "12345678"
        };
        return createLost(lostItem, auth).then(res =>
            assertEq(res.name, lostItem.itemName)
        )
    })
);

unit_test("allLosts", () =>
    after_n_lost_or_found_publish("lost", 5, () =>
        allLosts(10, 2).then(res =>
            assertEq(res.totalCount, 5)
        )
    )
)

unit_test("deleteLost", () =>
    after_publishLost((auth, lostId) =>
        deleteLost(lostId, auth).then(res =>
            assert(res.ok)
        )
    )
);

unit_test("claimLost", () =>
    after_publishLost((auth, lostId, lostObj) =>
        after_signUp((auth, uname, pass, nick) =>
            claimLost(lostId, auth).then(res => {
                assert(res.ok);
                return lostInfo(lostId).then(res =>
                    assertEq(res.claimer.username, nick)
                )
            })
        )
    )
);

unit_test("cancelClaimLost", () =>
    after_publishLost((auth, lostId, lostObj) =>
        claimLost(lostId, auth).then(res => {
            cancelClaimLost(lostId, auth).then(res =>
                assert(res.ok)
            )
        })
    )
);