unit_test("signup", () =>
    after_signUp(auth => 
        assertNonEmpty(auth)
    )
);

unit_test("login", () => 
    after_signUp((auth, username, password) => 
        login({username, password}).then(res =>
            assertNonEmpty(res.token)
        )
    )
);

unit_test("logout", () => 
    after_signUp(auth =>
        logout(auth).then(res =>
            assert(res.ok)
        )
    )
);


unit_test("currentUser", () =>
    after_signUp(auth => 
        currentUser(auth).then(res => 
            assertNonEmpty(res.userId)
        )
    )
);