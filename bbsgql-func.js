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
  variables: {

  }
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

const schoolHeatsOfAuthor = (first, skip, authorId, auth) => sendGQL({
  query: SCHOOL_HEATS_OF_AUTHOR,
  variables: {
    first: first,
    skip: skip,
    authorId: authorId
  },
  
auth: auth

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
  variables: {

  }
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

const createNews = (newsInput) => sendGQL({
  query: CREATE_NEWS,
  variables: {
    newsInput: newsInput
  }
});

const deleteNews = (newsId) => sendGQL({
  query: DELETE_NEWS,
  variables: {
    newsId: newsId
  }
});

const editNews = (newsInput, newsId) => sendGQL({
  query: EDIT_NEWS,
  variables: {
    newsInput: newsInput,
    newsId: newsId
  }
});

const createSchoolHeat = (schoolHeatInput, first, skip) => sendGQL({
  query: CREATE_SCHOOL_HEAT,
  variables: {
    schoolHeatInput: schoolHeatInput,
    first: first,
    skip: skip
  }
});

const deleteSchoolHeat = (id, first, skip) => sendGQL({
  query: DELETE_SCHOOL_HEAT,
  variables: {
    id: id,
    first: first,
    skip: skip
  }
});

const createSchoolHeatComment = (schoolHeatCommentInput) => sendGQL({
  query: CREATE_SCHOOL_HEAT_COMMENT,
  variables: {
    schoolHeatCommentInput: schoolHeatCommentInput
  }
});

const deleteSchoolHeatComment = (cmmtId, shId) => sendGQL({
  query: DELETE_SCHOOL_HEAT_COMMENT,
  variables: {
    cmmtId: cmmtId,
    shId: shId
  }
});

const createSchoolHeatCommentReply = (schoolHeatReplyInput) => sendGQL({
  query: CREATE_SCHOOL_HEAT_COMMENT_REPLY,
  variables: {
    schoolHeatReplyInput: schoolHeatReplyInput
  }
});

const deleteSchoolHeatCommentReply = (rpyId, cmmtId, shId) => sendGQL({
  query: DELETE_SCHOOL_HEAT_COMMENT_REPLY,
  variables: {
    rpyId: rpyId,
    cmmtId: cmmtId,
    shId: shId
  }
});

const createEntertainment = (entertainmentInput, first, skip) => sendGQL({
  query: CREATE_ENTERTAINMENT,
  variables: {
    entertainmentInput: entertainmentInput,
    first: first,
    skip: skip
  }
});

const deleteEntertainment = (id, first, skip) => sendGQL({
  query: DELETE_ENTERTAINMENT,
  variables: {
    id: id,
    first: first,
    skip: skip
  }
});

const createEntertainmentComment = (entertainmentCommentInput) => sendGQL({
  query: CREATE_ENTERTAINMENT_COMMENT,
  variables: {
    entertainmentCommentInput: entertainmentCommentInput
  }
});

const deleteEntertainmentComment = (cmmtId, etmtId) => sendGQL({
  query: DELETE_ENTERTAINMENT_COMMENT,
  variables: {
    cmmtId: cmmtId,
    etmtId: etmtId
  }
});

const createEntertainmentCommentReply = (entertainmentReplyInput) => sendGQL({
  query: CREATE_ENTERTAINMENT_COMMENT_REPLY,
  variables: {
    entertainmentReplyInput: entertainmentReplyInput
  }
});

const deleteEntertainmentCommentReply = (rpyId, cmmtId, etmtId) => sendGQL({
  query: DELETE_ENTERTAINMENT_COMMENT_REPLY,
  variables: {
    rpyId: rpyId,
    cmmtId: cmmtId,
    etmtId: etmtId
  }
});

const createLearningResource = (learningResourceInput, first, skip) => sendGQL({
  query: CREATE_LEARNING_RESOURCE,
  variables: {
    learningResourceInput: learningResourceInput,
    first: first,
    skip: skip
  }
});

const deleteLearningResource = (id, first, skip) => sendGQL({
  query: DELETE_LEARNING_RESOURCE,
  variables: {
    id: id,
    first: first,
    skip: skip
  }
});

const createLearningResourceComment = (learningResourceCommentInput) => sendGQL({
  query: CREATE_LEARNING_RESOURCE_COMMENT,
  variables: {
    learningResourceCommentInput: learningResourceCommentInput
  }
});

const deleteLearningResourceComment = (cmmtId, lrId) => sendGQL({
  query: DELETE_LEARNING_RESOURCE_COMMENT,
  variables: {
    cmmtId: cmmtId,
    lrId: lrId
  }
});

const createLearningResourceCommentReply = (learningResourceReplyInput) => sendGQL({
  query: CREATE_LEARNING_RESOURCE_COMMENT_REPLY,
  variables: {
    learningResourceReplyInput: learningResourceReplyInput
  }
});

const deleteLearningResourceCommentReply = (rpyId, cmmtId, lrId) => sendGQL({
  query: DELETE_LEARNING_RESOURCE_COMMENT_REPLY,
  variables: {
    rpyId: rpyId,
    cmmtId: cmmtId,
    lrId: lrId
  }
});

const createFound = (foundInput) => sendGQL({
  query: CREATE_FOUND,
  variables: {
    foundInput: foundInput
  }
});

const deleteFound = (id) => sendGQL({
  query: DELETE_FOUND,
  variables: {
    id: id
  }
});

const claimFound = (userId, foundId) => sendGQL({
  query: CLAIM_FOUND,
  variables: {
    userId: userId,
    foundId: foundId
  }
});

const createLost = (lostInput) => sendGQL({
  query: CREATE_LOST,
  variables: {
    lostInput: lostInput
  }
});

const deleteLost = (id) => sendGQL({
  query: DELETE_LOST,
  variables: {
    id: id
  }
});

const claimLost = (userId, lostId) => sendGQL({
  query: CLAIM_LOST,
  variables: {
    userId: userId,
    lostId: lostId
  }
});

const createLecture = (lectureInput) => sendGQL({
  query: CREATE_LECTURE,
  variables: {
    lectureInput: lectureInput
  }
});

const editLecture = (lectureInput, id) => sendGQL({
  query: EDIT_LECTURE,
  variables: {
    lectureInput: lectureInput,
    id: id
  }
});

const deleteLecture = (id) => sendGQL({
  query: DELETE_LECTURE,
  variables: {
    id: id
  }
});
