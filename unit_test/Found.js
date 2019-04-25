unit_test_only("createFound", () =>
    after_signUp(auth => {
        const foundItem = {
            itemName: "testItem",
            description: "this is description",
            position: "position",
            pictureBase64: getBase64Image(document.getElementById("test-img")),
            contact: "12345678"
        };
        return createFound(foundItem, auth).then(res =>
            console.log(res) && assertEq(res.name, foundItem.itemName)
        )
    })
);

// unit_test("allFounds" , () => 

// )