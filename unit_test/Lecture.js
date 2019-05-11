const after_createdLecture = (func) => {
    const lect = {
        title: "title",
        content: {
            elems: [{
                type: "Text",
                str: "whow! A lecture is not easy to construct"
            }]
        },
        position: "position",
        time: (new Date()).getTime(),
        lecturer: "me",
        note: "note"
    };
    const username = "admin";
    const password = "letmein";
    return login({username, password}).then(res => {
        const auth = res.token;
        return createLecture(lect, auth).then(res => {
            const lectureInfo = res;
            return func(auth, lectureInfo, lect);
        });
    });
}
const after_n_lecture_create = (nTimes, func) => {
    const username = "admin";
    const password = "letmein";
    return login({username, password}).then(res => {
        const auth = res.token;
        let chain = Promise.resolve();
        let pubLects = [];
        let pubLectIds = [];
        for (let i = 0; i < nTimes; i++) {
            const lect = {
                title: "title" + i,
                content: {
                    elems: [{
                        type: "Text",
                        str: "whow! A lecture is not easy to construct" + i
                    }]
                },
                position: "position" + i,
                time: (new Date()).getTime(),
                lecturer: "me",
                note: "note"
            };
            pubLects.push(lect);
            chain = chain.then(() => createLecture(lect, auth))
                .then(result => pubLectIds.push(result.id));
        }
        return chain.then(() => func(auth, pubLects, pubLectIds));
    });
};


unit_test("createLecture", () => 
    after_createdLecture((auth, lectInfo, lectInput) => {
        assertEq(lectInfo.note, lectInput.note);
        assertEq(lectInfo.content.items[0].text, lectInput.content.elems[0].str);
    })
);

unit_test("allLectures", () => 
    after_n_lecture_create(10, (auth, lects, ids) => 
        allLectures(2, 5).then(res => {
            assertEq(res.totalCount, 10)
            const resIds = res.lectures.map(x => x.id);
            const originIds = ids.reverse().slice(2, 7);
            assertEq(JSON.stringify(resIds), JSON.stringify(originIds));
        })
    )
);

unit_test("deleteLecture", () => 
    after_n_lecture_create(3, (auth, lects, ids) => {
        const second = ids[1];
        return deleteLecture(second, auth).then(res => {
            assert(res.ok);
            return allLectures().then(res => 
                assertEq(res.totalCount, 2)
            );
        });
    })
);

unit_test("editLecture", () => 
    after_createdLecture((auth, lect, testObj) => 
        editLecture(lect.id, {title: "changed"}, auth).then(res => {
            assertEq(res.title, "changed");
            assertEq(res.id, lect.id);
        })
    )
);
