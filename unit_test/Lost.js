const after_n_lost_or_found_publish = (foundOrLostStr, nTimes, func) => {
	let isFound = false;
	if (foundOrLostStr === "lost") isFound = false;
	else if (foundOrLostStr === "found") isFound = true;
	else throw new Error("not found or lost");

	return after_signUp(auth => {
		let chain = Promise.resolve();
		let pubItems = [];
		let pubItemIds = [];
		for (let i = 0; i < nTimes; ++i) {
			const item = {
				itemName: "qwert" + i,
				description: "qwerty" + i,
				position: "qwertyu" + i,
				contact: "1121234567" + i,
				pictureBase64: "aGVsbG93b3JsZCE=",
			};
			if (isFound) item.foundTime = Date.now();
			else item.lostTime = Date.now();

			pubItems.push(item);
			chain = chain.then(() => isFound ? createFound(item, auth) : createLost(item, auth))
				.then(result => {
					pubItemIds.push(result.id);
				});
		}

		return chain.then(() => func(auth, pubItems, pubItemIds));
	})
};

const after_publishLost = (func) =>
	after_signUp(auth => {
		const testObj = {
			itemName: "qwert",
			description: "qwerty",
			position: "qwertyu",
			contact: "1121234567",
			pictureBase64: "aGVsbG93b3JsZCE=",
			lostTime: Date.now(),
		};
		return createLost(testObj, auth).then(result =>
			func(auth, result.id, testObj)
		)
	});

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