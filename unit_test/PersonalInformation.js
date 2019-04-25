unit_test("personInfo", () =>
    after_signUp((auth, u, p, nickname) =>
        currentUser(auth).then(res => {
            const id = res.userId;
            return personInfo(id).then(res =>
                assertEq(res.username, nickname)
            );
        })
    )
);

unit_test("editPersonInfo", () =>
    after_signUp(auth => 
        editPersonInfo({introduction: "test"}, auth).then(res => 
            assertEq(res.introduction, "test")
        )
    )
);

unit_test("allMajors", () =>
    allMajors().then(res => 
        assertEq(res.length, 86)
    )
);

unit_test("allSchools", () =>
    allSchools().then(res => 
        assertEq(res.length, 27)
    )
);

unit_test("majorsIn", () => 
    majorsIn("生物科学与工程学院").then(res => 
        assertEq(res.length, 3)
    )
);