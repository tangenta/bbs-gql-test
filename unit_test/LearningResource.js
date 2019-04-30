const after_create_n_learningResource = (nTimes, func) => {
    const mockObj = {
        title: "ttttz",
        content: {
            elems: [
                {type: "Picture", str: "aGVsbG93b3JsZCE="},
                {type: "Text", str: "I close my eyes, Oh God I think I'm falling"},
                {type: "Text", str: "When you call my name it's like a little prayer"},
            ]
        },
        const_course: "数学分析"
    };
    return after_n_things_created(nTimes, mockObj, 
        (auth, item) => createLearningResource(item, auth), res => res.id, func);
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
            assertEq(res.errCode, 43)   // cannot parse course str
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

unit_test("allLearningResources - without course", () => 
    after_create_n_learningResource(5, (auth, items, ids) => 
        allLearningResources(1, 3, null, "ActiveTimeAsc").then(res => {
            assertEq(res.totalCount, 5);
            const originIds = ids.slice(1, 4);
            const resIds = res.learningResources.map(x => x.id);
            assertEq(JSON.stringify(originIds), JSON.stringify(resIds));
        })
    )
);

unit_test("allLearningResources - with course1", () => 
    after_create_n_learningResource(5, (auth, items, ids) => 
        allLearningResources(1, 3, "数学分析", "ActiveTimeAsc").then(res => {
            assertEq(res.totalCount, 5);
            const originIds = ids.slice(1, 4);
            const resIds = res.learningResources.map(x => x.id);
            assertEq(JSON.stringify(originIds), JSON.stringify(resIds));
        })
    )
);

unit_test("allLearningResources - with course2", () => 
    after_create_n_learningResource(5, (auth, items, ids) => 
        allLearningResources(1, 3, "数据结构", "ActiveTimeAsc").then(res => {
            assertEq(res.totalCount, 0);
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

unit_test("create/delete LearningResourceReply", () =>
    after_create_n_learningResource(1, (auth1, items, ids) => {
        const postId = ids[0];
        const commentInput = {
            postIdCommenting: postId,
            content: {
                elems: [{
                    type: "Text",
                    str: "Awesome!"
                }]
            }
        };
        return createLearningResourceComment(commentInput, auth1).then(res => {
            const commentId = res.id;
            const commenter = res.author.userId;

            return after_signUp((auth2, uaname, pass, nickname) => {
                const replyInput = {
                    postIdReplying: postId,
                    commentIdReplying: commentId,
                    content: {
                        elems: [{
                            type: "Text",
                            str: "Awesome 2!"
                        }]
                    },
                    replyTo: commenter
                };
                return createLearningResourceCommentReply(replyInput, auth2).then(res => {
                    const replyId = res.id;
                    assertNonEmpty(replyId);
                    assertEq(res.content.items[0].text, replyInput.content.elems[0].str);
                    assertEq(res.replyTo.userId, commenter);
                    return deleteLearningResourceCommentReply(postId, commentId, replyId, auth2).then(res => {
                        assert(res.ok);
                        return learningResourceInfo(postId).then(res => 
                            assertEq(res.allComments.comments[0].allReplies.totalCount, 0)
                        );
                    });
                });
            });
        });  
    })
);

unit_test("learningResourcesOfAuthor", () =>
    after_create_n_learningResource(3, (auth1, items1, ids1) => 
        after_create_n_learningResource(4, (auth2, items2, ids2) => 
            currentUser(auth1).then(res => {
                const user1Id = res.userId;
                return learningResourcesOfAuthor(user1Id).then(res => {
                    assertEq(res.totalCount, 3);
                    assertEq(res.learningResources.filter(x => x.author.userId === user1Id).length, 3);
                });
            })
        )
    )
);