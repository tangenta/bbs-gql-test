const after_create_n_learningResource = (nTimes, func) => {
    return after_signUp(auth => {
		let chain = Promise.resolve();
		let pubItems = [];
		let pubItemIds = [];
		for (let i = 0; i < nTimes; i++) {
			const item = {
				title: "ttttz" + i,
				content: {
					elems: [
						{type: "Picture", str: "aGVsbG93b3JsZCE="},
						{type: "Text", str: "I close my eyes, Oh God I think I'm falling" + i},
						{type: "Text", str: "When you call my name it's like a little prayer" + i},
					]
                },
                course: "数学分析"
			};
			pubItems.push(item);
			chain = chain.then(() => createLearningResource(item, auth))
				.then(result => {
					pubItemIds.push(result.id)
				})
		}
		return chain.then(() => func(auth, pubItems, pubItemIds))
	})
};

let lrInput = {
    title: "title",
    content: {
        elems: [{
            type: "Picture",
            str: "aGVsbG93b3JsZCE="
        }, {
            type: "Text",
            str: "helloworld"
        }]
    },
    course: "数学分析"
};

unit_test("createLearningResource", () => 
    after_signUp(auth => {
        
        return createLearningResource(lrInput, auth).then(res => {
            assertEq(res.content.items[1].text, "helloworld");
        });
    })
);

unit_test("createLearningResource - incorrect course", () => 
    after_signUp(auth => {
        const wrongLrInput = {
            ...lrInput,
            course: "INCORRECT"
        };
        return createLearningResource(wrongLrInput, auth).then(res => 
            assertEq(res.errCode, 43)
        );
    })
);

unit_test("createLearningResource with file", () => 
    after_signUp(auth => {
        const inputWithFile = {
            ...lrInput,
            base64AttachedFile: "aGVsbG93b3JsZCE="
        };
        return createLearningResource(inputWithFile, auth).then(res => 
            assertNonEmpty(res.attachedFileURL)
        );
    })
);

unit_test("allLearningResources", () => 
    after_create_n_learningResource(5, (auth, items, ids) => 
        allLearningResources(1, 3, null, "ActiveTimeAsc").then(res => {
            assertEq(res.totalCount, 5);
            const originIds = ids.slice(1, 4);
            const resIds = res.learningResources.map(x => x.id);
            assertEq(JSON.stringify(originIds), JSON.stringify(resIds));
        })
    )
);

unit_test("deleteLearningResource", () => 
    after_create_n_learningResource(3, (auth, items, ids) =>
        deleteLearningResource(ids[2], auth).then(res => {
            return allLearningResources().then(res => {
                assertEq(res.totalCount, 2);
                const index = res.learningResources.find(x => x.id === ids[2]);
                assertEq(index, undefined);
            });
        })
    )
);

unit_test("create/delete LearningResourceComment", () => 
    after_create_n_learningResource(1, (auth1, items, ids) => {
        const commentInput = {
            postIdCommenting: ids[0],
            content: {
                elems: [{
                    type: "Text",
                    str: "Awesome!"
                }]
            }
        };
        return after_signUp((auth2, uname, pass, nickname) => 
            createLearningResourceComment(commentInput, auth2).then(res => {
                assertEq(res.content.items[0].text, commentInput.content.elems[0].str);
                assertEq(res.author.username, nickname);
                assertEq(res.allReplies.totalCount, 0);
                return deleteLearningResourceComment(ids[0], res.id, auth2).then(res => {
                    assert(res.ok);
                    return learningResourceInfo(ids[0]).then(res => {
                        assertEq(res.allComments.totalCount, 0);
                    });
                });
            })
        );
    })
);