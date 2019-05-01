const after_create_n_entertainments = (nTimes, func) => {
    const mockObj = {
        title: "Sparks fly",
        content: {
            elems: [
                { type: "Text", str: "Drop everything now" },
                { type: "Text", str: "Leave me in the pouring rain" },
            ]
        }
    };
    return after_n_things_created(nTimes, mockObj,
        (auth, item) => createEntertainment(item, auth), res => res.id, func);
};

const after_create_n_comments = (nTimes, postId, func) => {
    const mockObj = {
        const_postIdCommenting: postId,
        content: {
            elems: [
                { type: "Text", str: "I dont know about you" },
                { type: "Text", str: "But Im feeling 22" },
            ]
        }
    };
    return after_n_things_created(nTimes, mockObj, 
        (auth, item) => createEntertainmentComment(item, auth), res => res, func);
};

const after_create_n_replies = (nTimes, postId, commentId, replyToId, func) => {
    const mockObj = {
        const_postIdReplying: postId,
        const_commentIdReplying: commentId,
        content: {
            elems: [
                { type: "Text", str: "I dont know about you" },
                { type: "Text", str: "But Im feeling 22" },
            ]
        },
        const_replyTo: replyToId
    };
    return after_n_things_created(nTimes, mockObj, 
        (auth, item) => createEntertainmentCommentReply(item, auth), res => res, func);
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

unit_test("allEntertainments", () =>
    after_create_n_entertainments(5, (auth, items, ids) =>
        allEntertainments(1, 4).then(res => {
            assertEq(res.totalCount, 5);
            assertEq(res.entertainments.length, 4);
        })
    )
);

unit_test("allEntertainmentByAuthors", () =>
    after_create_n_entertainments(3, (auth_1, items_1, ids_1) =>
        after_create_n_entertainments(2, (auth_2, items_2, ids_2) =>
            currentUser(auth_2).then(res => {
                const userId2 = res.userId;
                return entertainmentsOfAuthor(userId2, 1, 5).then(res => {
                    assertEq(res.totalCount, 2);
                    assertEq(res.entertainments.length, 1);
                    assertEq(res.entertainments[0].author.userId, userId2);
                });
            })
        )
    )
);

unit_test("create EntertainmentComment", () =>
    after_create_n_entertainments(1, (auth, items, ids) => {
        const input = {
            postIdCommenting: ids[0],
            content: {
                elems: [
                    { type: "Text", str: "This night is sparkling" },
                    { type: "Text", str: "Don't you let it go" },
                ]
            }
        }
        return createEntertainmentComment(input, auth).then(res => {
            return currentUser(auth).then(userIdRes => {
                const userId = userIdRes.userId;
                assertEq(res.author.userId, userId);
                assertEq(res.content.items.length, 2);
            })
        });
    })
);

unit_test("delete EntertainmentComment", () =>
    after_create_n_entertainments(1, (auth, items, ids) => {
        return after_create_n_comments(3, ids[0], (auth, cmtItems, comments) => 
            currentUser(auth).then(res => {
                const userId = res.userId;
                assertEq(comments.filter(c => c.author.userId === userId).length, comments.length);
                return deleteEntertainmentComment(ids[0], comments[0].id, auth).then(res => {
                    assert(res.ok);
                    return entertainmentInfo(ids[0]).then(res => {
                        assertEq(res.allComments.totalCount, 2);
                        assertEq(res.allComments.comments.find(x => x.id === comments[0].id), undefined);
                    });
                });
            })
        );
    })
);

unit_test("create EntertainmentCommentReply", () =>
    after_create_n_entertainments(1, (auth, items, ids) => 
        after_create_n_comments(1, ids[0], (auth, items, comments) => {
            const input = {
                postIdReplying: ids[0],
                commentIdReplying: comments[0].id,
                content: {
                    elems: [
                        { type: "Text", str: "I'm wonderstruck" },
                        { type: "Text", str: "blushing" },
                        { type: "Text", str: "all" },
                        { type: "Text", str: "the way" },
                        { type: "Text", str: "home" },
                    ]
                },
                replyTo: null
            };
            return createEntertainmentCommentReply(input, auth).then(res => {
                assertEq(res.content.items.length, input.content.elems.length);
                assertEq(res.content.items[3].text, input.content.elems[3].str);
                assertEq(res.replyTo, input.replyTo);
            });
        })
    )
);

unit_test("create/delete EntertainmentCommentReply", () =>
    after_create_n_entertainments(1, (auth, items, postIds) => 
        after_create_n_comments(1, postIds[0], (auth, items, comments) => 
            after_create_n_replies(5, postIds[0], comments[0].id, null, (auth, items, replies) => 
                deleteEntertainmentCommentReply(postIds[0], comments[0].id, replies[0].id, auth).then(res => {
                    assert(res.ok);
                    return entertainmentInfo(postIds[0]).then(res => {
                        assertEq(res.allComments.comments[0].allReplies.totalCount, 4)
                    });
                })
            )
        )
    )
);
