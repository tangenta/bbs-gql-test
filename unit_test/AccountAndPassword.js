unit_test("confirmPassword", () => 
    after_signUp((auth, username, password) =>
        confirmPassword({username, password}, auth).then(res =>
            assertNonEmpty(res.resetToken)
        )
    )
);

unit_test("changePassword", () => 
    after_signUp((auth, username, password) =>
        confirmPassword({username, password}, auth).then(res => {
            const resetToken = res.resetToken;
            changePassword(resetToken, password + "newPass", auth).then(res => {
                login({username, password: password + "newPass"}).then(t => {
                    assertNonEmpty(t.token);
                    return login({username, password}).then(t2 =>
                        assertNonEmpty(t2.errCode)
                    )
                })
            })
        })
    )
);  