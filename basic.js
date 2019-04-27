const fire_all_tests = async () => {
	await fire_unit_tests();
	// await fire_behav_tests();
}

const remoteAddress = "http://localhost:4000";

const sendGQL = (queryPayloadObject) => {
	return fetch(remoteAddress + "/graphql/", {
		method: "POST",
		body: JSON.stringify({
			variables: queryPayloadObject.variables,
			query: queryPayloadObject.query
		}),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': "Bearer " + queryPayloadObject.auth || "not-set",
		}
	}).then(response => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error("--Network Error--");
		}
	}).then(json => {
		// dig into two layer 
		for (let data in json) {
			for (let f in json[data]) {
				return json[data][f];
			}
		}
	});
};

// =======================================useful func=====================================
// =======================================useful func=====================================
// =======================================useful func=====================================
const CURRENT_MAX_ID = "currentMaxId";

let suffix = localStorage.getItem(CURRENT_MAX_ID) || 0;
const generateEmailPassAndNickname = () => {
	const newSuffix = ++suffix;
	localStorage.setItem(CURRENT_MAX_ID, newSuffix)
	return ["tangenta" + newSuffix + "@126.com", "pass1234", "tangenta" + newSuffix];
};

// ---------convenient func---------

// [dependencies: signup]
const after_signUp = (func) => {
	[username, password, nickname] = generateEmailPassAndNickname();
	return signup({username, password, nickname})
		.then(signUpResult => {
			const auth = signUpResult.token;
			return func(auth, username, password, nickname);
		});
};

// [dependencies: signup, loggedId]
const provided_userId = (func) =>
	after_signUp((auth, username, password, nickname) =>
		loggedId(auth).then(result =>
			func(result.userid, username, password, nickname)
		)
	);

// [dependencies: signup, publishFound]
const after_publishFound = (func) =>
	after_signUp(auth => {
		const testObj = {
			itemName: "qwert",
			description: "qwerty",
			position: "qwertyu",
			contact: "1121234567",
			pictureBase64: "aGVsbG93b3JsZCE=",
			foundTime: Date.now(),
		};
		return createFound(testObj, auth).then(result =>
			func(auth, result.id, testObj)
		)
	});

// [dependencies: signup, publishLost]
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

// [dependencies: signup, publishLost | publishFound]
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

const after_n_schoolheat_publisth = (nTimes, func) => {
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
				}
			};
			pubItems.push(item);
			chain = chain.then(() => createSchoolHeat(item, auth))
				.then(result => {
					pubItemIds.push(result.id)
				})
		}
		return chain.then(() => func(auth, pubItems, pubItemIds))
	})
}

//---------unit test---------

let unitTests = [];
const unit_test = (name, f) => {
	unitTests.push({ name: name, func: f });
};
const unit_test_only = (name, f) => {
	unitTests.push({ name: name, func: f, unique: true });
}
const fire_unit_tests = async () => {
	await fire_tests("unit test", unitTests);
}

//---------behavior test---------

let behavTests = [];
const behav_test = (name, f) => {
	behavTests.push({ name: name, func: f });
};
const behav_test_only = (name, f) => {
	behavTests.push({ name: name, func: f, unique: true });
}
const fire_behav_tests = async () => {
	await fire_tests("behavior test", behavTests);
}

//---------test firing---------

const fire_tests = async (kind, tests) => {
	const uniqueTest = tests.filter(testObj => testObj.unique !== undefined);
	if (uniqueTest.length > 1) {
		console.error("===== more than one unique " + kind + "s are found: (" + uniqueTest.map(x => x.name).join(", ") + ") =====");
		return;
	}
	const testsToRun = uniqueTest.length === 0 ? tests : uniqueTest;
	let passTestCounter = 0;
	for (let f of testsToRun) {
		await f.func()
			.then(() => {
				passTestCounter++;
				return console.log("SUCCESS # " + kind + ": " + f.name)
			})
			.then(() => new Promise(resolve => setTimeout(resolve, 10)))  // visual enjoyment
			.then(() => cleanUpRoutine())
			.then(() => new Promise(resolve => setTimeout(resolve, 10)))
			.catch(error => {
				console.error("=== (" + f.name + ") " + kind + " FAILED ===");
				console.error(error);
			});
	}
	console.log(kind + " pass/run: " + passTestCounter + "/" + testsToRun.length);
}

const cleanUpRoutine = () => {
	const reset = `
		mutation {
			reset
		}
	`;
	sendGQL({
		query: reset,
	})
}

// ---------assertions---------

const assert = (bool) => {
	if (!bool) throw new Error("assertion failed");
};

const assertEq = (left, right) => {
	if (left !== right) {
		throw new Error("left: " + left + " is not equal to right: " + right);
	}
}
	;
const assertNotEq = (left, right) => {
	if (left === right) {
		throw new Error("left: " + left + " is equal to right: " + right);
	}
}

const assertNonEmpty = (obj) => {
	if (obj === undefined || obj === null) {
		throw new Error("empty value: " + obj);
	}
}

const fail = (errMsg) => {
	throw new Error("test failed: " + errMsg);
};

// =========================================miscellaneous========================================

// user uploaded image
function encodeImageFileAsURL(element, onLoaded) {
	var file = element.files[0];
	var reader = new FileReader();
	reader.onloadend = function () {
		const base64Img = reader.result.replace(/^data:image\/(png|jpg);base64,/, "");
		onLoaded(base64Img);
	}
	reader.readAsDataURL(file);
}

// image from internet
function getBase64Image(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	var dataURL = canvas.toDataURL("image/png");
	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

// unit_test("upload user profile", () =>
// 	after_signUp(auth => {
// 		const base64Image = getBase64Image(document.getElementById("test-img"));
// 		return uploadUserProfile(base64Image, auth).then(result => {
// 			assertNonEmpty(result.personalInfo.userId);
// 		});
// 	})
// );

// =========================================use case========================================
// =========================================use case========================================
// =========================================use case========================================

function isCanvasBlank(canvas) {
	return !canvas.getContext('2d')
		.getImageData(0, 0, canvas.width, canvas.height).data
		.some(channel => channel !== 0);
}

behav_test_only("upload user profile image and then get url", () =>
	after_signUp(auth => {
		const base64Image = getBase64Image(document.getElementById("test-img"));
		return uploadUserProfile(base64Image, auth).then(result => {
			assert(result.ok);
			return loggedId(auth).then(result => {
				const userId = result.userid;
				return userInfo(userId).then(result => {
					const relativePath = result.pictureUrl;
					const canvas = document.getElementById("canvas");
					const context = canvas.getContext('2d');
					const image = new Image();
					image.src = remoteAddress + relativePath;
					image.crossOrigin = "anonymous";
					image.onload = function () {
						context.drawImage(image, 0, 0);
						assert(!isCanvasBlank(canvas));
					};
				});
			});
		});
	})
);

const eqSet = (as, bs) => {
	if (as.size !== bs.size) return false;
	for (const a of as) if (!bs.has(a)) return false;
	return true;
};

