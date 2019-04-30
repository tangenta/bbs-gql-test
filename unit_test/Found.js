const after_publishFound = (func) =>
	after_signUp(auth => {
		const testObj = {
			itemName: "qwert",
			description: "qwerty",
			position: "qwertyu",
			contact: "1121234567",
			pictureBase64: "aGVsbG93b3JsZCE=",
			foundTime: Date.now(),
		};
		return createFound(testObj, auth).then(result =>
			func(auth, result.id, testObj)
		)
	});

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

unit_test("allFounds", () =>
    after_n_lost_or_found_publish("found", 5, (_, __, ids) =>
        allFounds(0, 10).then(res => {
            assert(eqSet(new Set(res.founds.map(i => i.id)), new Set(ids)));
            assertEq(res.totalCount, 5);
        })
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
);

unit_test("cancelClaimFound", () =>
    after_publishFound((auth, foundId, foundObj) =>
        claimFound(foundId, auth).then(res => {
            cancelClaimFound(foundId, auth).then(res =>
                assert(res.ok)
            )
        })
    )
);
