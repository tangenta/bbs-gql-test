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

const after_signUp = (func) => {
	[username, password, nickname] = generateEmailPassAndNickname();
	return signup({username, password, nickname})
		.then(signUpResult => {
			const auth = signUpResult.token;
			return func(auth, username, password, nickname);
		});
};

const provided_userId = (func) =>
	after_signUp((auth, username, password, nickname) =>
		loggedId(auth).then(result =>
			func(result.userid, username, password, nickname)
		)
	);

const after_n_things_created = (nTimes, mockObj, creatorFunc, resultIdExtractor, callback) => 
	after_signUp(auth => {
		let chain = Promise.resolve();
		let pubItems = [];
		let pubItemIds = [];

		for (let i = 0; i < nTimes; ++i) {
			let item = {};
			for (let j in mockObj) {
				if (j.includes("const_")) {
					const realIndex = j.replace("const_", "");
					item[realIndex] = mockObj[j];
				} else if (typeof mockObj[j] === "string"){
					item[j] = mockObj[j] + i;
				} else {
					item[j] = mockObj[j];
				}
			}
			pubItems.push(item);
			chain = chain.then(() => creatorFunc(auth, item)).then(res => pubItemIds.push(resultIdExtractor(res)))
		}
		return chain.then(() => callback(auth, pubItems, pubItemIds));
	});

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
				cleanUpRoutine();
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

