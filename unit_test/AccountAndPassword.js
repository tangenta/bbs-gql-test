unit_test("confirmPassword", () => 
    after_signUp((auth, username, password) =>
        confirmPassword({username, password}, auth).then(res =>
            assertNonEmpty(res.resetToken)
        )
    )
);

unit_test_only("changePassword", () => 
    after_signUp((auth, username, password) =>
        confirmPassword({username, password}, auth).then(res => {
            const resetToken = res.resetToken;
            return changePassword(password + "newPass", resetToken, auth).then(res =>
                assert(res.ok)
            );
        })
    )
);