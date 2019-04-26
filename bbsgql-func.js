const currentUser = (auth) => sendGQL({
  query: CURRENT_USER,
  auth: auth
});

const hots = () => sendGQL({
  query: HOTS,

});

const latests = () => sendGQL({
  query: LATESTS,

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

const search = (content, skip, first) => sendGQL({
  query: SEARCH,
  variables: {
    content: content,
    skip: skip,
    first: first
  }
});

const allSchoolHeats = (skip, first, sortedBy) => sendGQL({
  query: ALL_SCHOOL_HEATS,
  variables: {
    skip: skip,
    first: first,
    sortedBy: sortedBy
  }
});

const schoolHeatInfo = (id) => sendGQL({
  query: SCHOOL_HEAT_INFO,
  variables: {
    id: id
  }
});

const schoolHeatsOfAuthor = (authorId, skip, first) => sendGQL({
  query: SCHOOL_HEATS_OF_AUTHOR,
  variables: {
    authorId: authorId,
    skip: skip,
    first: first
  }
});

const searchSchoolHeats = (title) => sendGQL({
  query: SEARCH_SCHOOL_HEATS,
  variables: {
    title: title
  }
});

const allEntertainments = (skip, first, sortedBy) => sendGQL({
  query: ALL_ENTERTAINMENTS,
  variables: {
    skip: skip,
    first: first,
    sortedBy: sortedBy
  }
});

const entertainmentInfo = (id) => sendGQL({
  query: ENTERTAINMENT_INFO,
  variables: {
    id: id
  }
});

const entertainmentsOfAuthor = (authorId, skip, first) => sendGQL({
  query: ENTERTAINMENTS_OF_AUTHOR,
  variables: {
    authorId: authorId,
    skip: skip,
    first: first
  }
});

const searchEntertainments = (title) => sendGQL({
  query: SEARCH_ENTERTAINMENTS,
  variables: {
    title: title
  }
});

const allLearningResource = (skip, first, course, sortedBy) => sendGQL({
  query: ALL_LEARNING_RESOURCE,
  variables: {
    skip: skip,
    first: first,
    course: course,
    sortedBy: sortedBy
  }
});

const allCourses = () => sendGQL({
  query: ALL_COURSES,

});

const learningResourceInfo = (id) => sendGQL({
  query: LEARNING_RESOURCE_INFO,
  variables: {
    id: id
  }
});

const learningResourcesOfAuthor = (authorId, skip, first) => sendGQL({
  query: LEARNING_RESOURCES_OF_AUTHOR,
  variables: {
    authorId: authorId,
    skip: skip,
    first: first
  }
});

const searchLearningResources = (title) => sendGQL({
  query: SEARCH_LEARNING_RESOURCES,
  variables: {
    title: title
  }
});

const allFounds = (skip, first) => sendGQL({
  query: ALL_FOUNDS,
  variables: {
    skip: skip,
    first: first
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

const allLosts = (skip, first) => sendGQL({
  query: ALL_LOSTS,
  variables: {
    skip: skip,
    first: first
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

const allLectures = (skip, first) => sendGQL({
  query: ALL_LECTURES,
  variables: {
    skip: skip,
    first: first
  }
});

const lectureInfo = (id) => sendGQL({
  query: LECTURE_INFO,
  variables: {
    id: id
  }
});

const searchLectures = (title, skip, first) => sendGQL({
  query: SEARCH_LECTURES,
  variables: {
    title: title,
    skip: skip,
    first: first
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

const editNews = (newsId, newsInput, auth) => sendGQL({
  query: EDIT_NEWS,
  variables: {
    newsId: newsId,
    newsInput: newsInput
  },
  auth: auth
});

const createSchoolHeat = (schoolHeatInput, auth) => sendGQL({
  query: CREATE_SCHOOL_HEAT,
  variables: {
    schoolHeatInput: schoolHeatInput
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

const deleteSchoolHeatComment = (shId, cmmtId, auth) => sendGQL({
  query: DELETE_SCHOOL_HEAT_COMMENT,
  variables: {
    shId: shId,
    cmmtId: cmmtId
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

const deleteSchoolHeatCommentReply = (shId, cmmtId, rpyId, auth) => sendGQL({
  query: DELETE_SCHOOL_HEAT_COMMENT_REPLY,
  variables: {
    shId: shId,
    cmmtId: cmmtId,
    rpyId: rpyId
  },
  auth: auth
});

const createEntertainment = (entertainmentInput, auth) => sendGQL({
  query: CREATE_ENTERTAINMENT,
  variables: {
    entertainmentInput: entertainmentInput
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

const deleteEntertainmentComment = (etmtId, cmmtId, auth) => sendGQL({
  query: DELETE_ENTERTAINMENT_COMMENT,
  variables: {
    etmtId: etmtId,
    cmmtId: cmmtId
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

const deleteEntertainmentCommentReply = (etmtId, cmmtId, rpyId, auth) => sendGQL({
  query: DELETE_ENTERTAINMENT_COMMENT_REPLY,
  variables: {
    etmtId: etmtId,
    cmmtId: cmmtId,
    rpyId: rpyId
  },
  auth: auth
});

const createLearningResource = (learningResourceInput, auth) => sendGQL({
  query: CREATE_LEARNING_RESOURCE,
  variables: {
    learningResourceInput: learningResourceInput
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

const deleteLearningResourceComment = (lrId, cmmtId, auth) => sendGQL({
  query: DELETE_LEARNING_RESOURCE_COMMENT,
  variables: {
    lrId: lrId,
    cmmtId: cmmtId
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

const deleteLearningResourceCommentReply = (lrId, cmmtId, rpyId, auth) => sendGQL({
  query: DELETE_LEARNING_RESOURCE_COMMENT_REPLY,
  variables: {
    lrId: lrId,
    cmmtId: cmmtId,
    rpyId: rpyId
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

const editLecture = (id, lectureInput, auth) => sendGQL({
  query: EDIT_LECTURE,
  variables: {
    id: id,
    lectureInput: lectureInput
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

const changePassword = (resetToken, newPassword, auth) => sendGQL({
  query: CHANGE_PASSWORD,
  variables: {
    resetToken: resetToken,
    newPassword: newPassword
  },
  auth: auth
});
