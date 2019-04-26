const currentUser = (auth) => sendGQL({
  query: CURRENT_USER,
  auth: auth
});

const hots = (first, skip) => sendGQL({
  query: HOTS,
  variables: {
    first: first,
    skip: skip
  }
});

const latests = (first, skip) => sendGQL({
  query: LATESTS,
  variables: {
    first: first,
    skip: skip
  }
});

const news = () => sendGQL({
  query: NEWS,

});

const newsInfo = (newsId) => sendGQL({
  query: NEWS_INFO,
  variables: {
    newsId: newsId
  }
});

const search = (first, skip, content) => sendGQL({
  query: SEARCH,
  variables: {
    first: first,
    skip: skip,
    content: content
  }
});

const allSchoolHeats = (sortedBy, first, skip) => sendGQL({
  query: ALL_SCHOOL_HEATS,
  variables: {
    sortedBy: sortedBy,
    first: first,
    skip: skip
  }
});

const schoolHeatInfo = (id, first, skip) => sendGQL({
  query: SCHOOL_HEAT_INFO,
  variables: {
    id: id,
    first: first,
    skip: skip
  }
});

const schoolHeatsOfAuthor = (first, skip, authorId) => sendGQL({
  query: SCHOOL_HEATS_OF_AUTHOR,
  variables: {
    first: first,
    skip: skip,
    authorId: authorId
  }
});

const searchSchoolHeats = (title, first, skip) => sendGQL({
  query: SEARCH_SCHOOL_HEATS,
  variables: {
    title: title,
    first: first,
    skip: skip
  }
});

const allEntertainments = (sortedBy, first, skip) => sendGQL({
  query: ALL_ENTERTAINMENTS,
  variables: {
    sortedBy: sortedBy,
    first: first,
    skip: skip
  }
});

const entertainmentInfo = (id, first, skip) => sendGQL({
  query: ENTERTAINMENT_INFO,
  variables: {
    id: id,
    first: first,
    skip: skip
  }
});

const entertainmentsOfAuthor = (first, skip, authorId) => sendGQL({
  query: ENTERTAINMENTS_OF_AUTHOR,
  variables: {
    first: first,
    skip: skip,
    authorId: authorId
  }
});

const searchEntertainments = (title, first, skip) => sendGQL({
  query: SEARCH_ENTERTAINMENTS,
  variables: {
    title: title,
    first: first,
    skip: skip
  }
});

const allLearningResource = (sortedBy, course, first, skip) => sendGQL({
  query: ALL_LEARNING_RESOURCE,
  variables: {
    sortedBy: sortedBy,
    course: course,
    first: first,
    skip: skip
  }
});

const allCourses = () => sendGQL({
  query: ALL_COURSES,

});

const learningResourceInfo = (id, first, skip) => sendGQL({
  query: LEARNING_RESOURCE_INFO,
  variables: {
    id: id,
    first: first,
    skip: skip
  }
});

const learningResourcesOfAuthor = (first, skip, authorId) => sendGQL({
  query: LEARNING_RESOURCES_OF_AUTHOR,
  variables: {
    first: first,
    skip: skip,
    authorId: authorId
  }
});

const searchLearningResources = (title, first, skip) => sendGQL({
  query: SEARCH_LEARNING_RESOURCES,
  variables: {
    title: title,
    first: first,
    skip: skip
  }
});

const allFounds = (first, skip) => sendGQL({
  query: ALL_FOUNDS,
  variables: {
    first: first,
    skip: skip
  }
});

const foundInfo = (id) => sendGQL({
  query: FOUND_INFO,
  variables: {
    id: id
  }
});

const searchFounds = (object) => sendGQL({
  query: SEARCH_FOUNDS,
  variables: {
    object: object
  }
});

const allLosts = (first, skip) => sendGQL({
  query: ALL_LOSTS,
  variables: {
    first: first,
    skip: skip
  }
});

const lostInfo = (id) => sendGQL({
  query: LOST_INFO,
  variables: {
    id: id
  }
});

const searchLosts = (object) => sendGQL({
  query: SEARCH_LOSTS,
  variables: {
    object: object
  }
});

const allLectures = (first, skip) => sendGQL({
  query: ALL_LECTURES,
  variables: {
    first: first,
    skip: skip
  }
});

const lectureInfo = (id) => sendGQL({
  query: LECTURE_INFO,
  variables: {
    id: id
  }
});

const searchLectures = (first, skip, title) => sendGQL({
  query: SEARCH_LECTURES,
  variables: {
    first: first,
    skip: skip,
    title: title
  }
});

const personInfo = (id) => sendGQL({
  query: PERSON_INFO,
  variables: {
    id: id
  }
});

const allMajors = () => sendGQL({
  query: ALL_MAJORS,

});

const allSchools = () => sendGQL({
  query: ALL_SCHOOLS,

});

const majorsIn = (school) => sendGQL({
  query: MAJORS_IN,
  variables: {
    school: school
  }
});

const signup = (signup) => sendGQL({
  query: SIGNUP,
  variables: {
    signup: signup
  }
});

const login = (loginInput) => sendGQL({
  query: LOGIN,
  variables: {
    loginInput: loginInput
  }
});

const logout = (auth) => sendGQL({
  query: LOGOUT,
  auth: auth
});

const createNews = (newsInput, auth) => sendGQL({
  query: CREATE_NEWS,
  variables: {
    newsInput: newsInput
  },
  auth: auth
});

const deleteNews = (newsId, auth) => sendGQL({
  query: DELETE_NEWS,
  variables: {
    newsId: newsId
  },
  auth: auth
});

const editNews = (newsInput, newsId, auth) => sendGQL({
  query: EDIT_NEWS,
  variables: {
    newsInput: newsInput,
    newsId: newsId
  },
  auth: auth
});

const createSchoolHeat = (schoolHeatInput, first, skip, auth) => sendGQL({
  query: CREATE_SCHOOL_HEAT,
  variables: {
    schoolHeatInput: schoolHeatInput,
    first: first,
    skip: skip
  },
  auth: auth
});

const deleteSchoolHeat = (id, auth) => sendGQL({
  query: DELETE_SCHOOL_HEAT,
  variables: {
    id: id
  },
  auth: auth
});

const createSchoolHeatComment = (schoolHeatCommentInput, auth) => sendGQL({
  query: CREATE_SCHOOL_HEAT_COMMENT,
  variables: {
    schoolHeatCommentInput: schoolHeatCommentInput
  },
  auth: auth
});

const deleteSchoolHeatComment = (cmmtId, shId, auth) => sendGQL({
  query: DELETE_SCHOOL_HEAT_COMMENT,
  variables: {
    cmmtId: cmmtId,
    shId: shId
  },
  auth: auth
});

const createSchoolHeatCommentReply = (schoolHeatReplyInput, auth) => sendGQL({
  query: CREATE_SCHOOL_HEAT_COMMENT_REPLY,
  variables: {
    schoolHeatReplyInput: schoolHeatReplyInput
  },
  auth: auth
});

const deleteSchoolHeatCommentReply = (rpyId, cmmtId, shId, auth) => sendGQL({
  query: DELETE_SCHOOL_HEAT_COMMENT_REPLY,
  variables: {
    rpyId: rpyId,
    cmmtId: cmmtId,
    shId: shId
  },
  auth: auth
});

const createEntertainment = (entertainmentInput, first, skip, auth) => sendGQL({
  query: CREATE_ENTERTAINMENT,
  variables: {
    entertainmentInput: entertainmentInput,
    first: first,
    skip: skip
  },
  auth: auth
});

const deleteEntertainment = (id, auth) => sendGQL({
  query: DELETE_ENTERTAINMENT,
  variables: {
    id: id
  },
  auth: auth
});

const createEntertainmentComment = (entertainmentCommentInput, auth) => sendGQL({
  query: CREATE_ENTERTAINMENT_COMMENT,
  variables: {
    entertainmentCommentInput: entertainmentCommentInput
  },
  auth: auth
});

const deleteEntertainmentComment = (cmmtId, etmtId, auth) => sendGQL({
  query: DELETE_ENTERTAINMENT_COMMENT,
  variables: {
    cmmtId: cmmtId,
    etmtId: etmtId
  },
  auth: auth
});

const createEntertainmentCommentReply = (entertainmentReplyInput, auth) => sendGQL({
  query: CREATE_ENTERTAINMENT_COMMENT_REPLY,
  variables: {
    entertainmentReplyInput: entertainmentReplyInput
  },
  auth: auth
});

const deleteEntertainmentCommentReply = (rpyId, cmmtId, etmtId, auth) => sendGQL({
  query: DELETE_ENTERTAINMENT_COMMENT_REPLY,
  variables: {
    rpyId: rpyId,
    cmmtId: cmmtId,
    etmtId: etmtId
  },
  auth: auth
});

const createLearningResource = (learningResourceInput, first, skip, auth) => sendGQL({
  query: CREATE_LEARNING_RESOURCE,
  variables: {
    learningResourceInput: learningResourceInput,
    first: first,
    skip: skip
  },
  auth: auth
});

const deleteLearningResource = (id, auth) => sendGQL({
  query: DELETE_LEARNING_RESOURCE,
  variables: {
    id: id
  },
  auth: auth
});

const createLearningResourceComment = (learningResourceCommentInput, auth) => sendGQL({
  query: CREATE_LEARNING_RESOURCE_COMMENT,
  variables: {
    learningResourceCommentInput: learningResourceCommentInput
  },
  auth: auth
});

const deleteLearningResourceComment = (cmmtId, lrId, auth) => sendGQL({
  query: DELETE_LEARNING_RESOURCE_COMMENT,
  variables: {
    cmmtId: cmmtId,
    lrId: lrId
  },
  auth: auth
});

const createLearningResourceCommentReply = (learningResourceReplyInput, auth) => sendGQL({
  query: CREATE_LEARNING_RESOURCE_COMMENT_REPLY,
  variables: {
    learningResourceReplyInput: learningResourceReplyInput
  },
  auth: auth
});

const deleteLearningResourceCommentReply = (rpyId, cmmtId, lrId, auth) => sendGQL({
  query: DELETE_LEARNING_RESOURCE_COMMENT_REPLY,
  variables: {
    rpyId: rpyId,
    cmmtId: cmmtId,
    lrId: lrId
  },
  auth: auth
});

const createFound = (foundInput, auth) => sendGQL({
  query: CREATE_FOUND,
  variables: {
    foundInput: foundInput
  },
  auth: auth
});

const deleteFound = (foundId, auth) => sendGQL({
  query: DELETE_FOUND,
  variables: {
    foundId: foundId
  },
  auth: auth
});

const claimFound = (foundId, auth) => sendGQL({
  query: CLAIM_FOUND,
  variables: {
    foundId: foundId
  },
  auth: auth
});

const cancelClaimFound = (foundId, auth) => sendGQL({
  query: CANCEL_CLAIM_FOUND,
  variables: {
    foundId: foundId
  },
  auth: auth
});

const createLost = (lostInput, auth) => sendGQL({
  query: CREATE_LOST,
  variables: {
    lostInput: lostInput
  },
  auth: auth
});

const deleteLost = (id, auth) => sendGQL({
  query: DELETE_LOST,
  variables: {
    id: id
  },
  auth: auth
});

const claimLost = (lostId, auth) => sendGQL({
  query: CLAIM_LOST,
  variables: {
    lostId: lostId
  },
  auth: auth
});

const cancelClaimLost = (foundId, auth) => sendGQL({
  query: CANCEL_CLAIM_LOST,
  variables: {
    foundId: foundId
  },
  auth: auth
});

const createLecture = (lectureInput, auth) => sendGQL({
  query: CREATE_LECTURE,
  variables: {
    lectureInput: lectureInput
  },
  auth: auth
});

const editLecture = (lectureInput, id, auth) => sendGQL({
  query: EDIT_LECTURE,
  variables: {
    lectureInput: lectureInput,
    id: id
  },
  auth: auth
});

const deleteLecture = (id, auth) => sendGQL({
  query: DELETE_LECTURE,
  variables: {
    id: id
  },
  auth: auth
});

const editPersonInfo = (personInfoInput, auth) => sendGQL({
  query: EDIT_PERSON_INFO,
  variables: {
    personInfoInput: personInfoInput
  },
  auth: auth
});

const confirmPassword = (comfirmInput, auth) => sendGQL({
  query: CONFIRM_PASSWORD,
  variables: {
    comfirmInput: comfirmInput
  },
  auth: auth
});

const changePassword = (newPassword, resetToken, auth) => sendGQL({
  query: CHANGE_PASSWORD,
  variables: {
    newPassword: newPassword,
    resetToken: resetToken
  },
  auth: auth
});
