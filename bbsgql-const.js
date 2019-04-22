const SCHOOL_HEATS_OF_AUTHOR = `
  query SchoolHeatsOfAuthor($skip: Long, $authorId: ID!, $first: Long) {
    schoolHeatsOfAuthor(skip: $skip, authorId: $authorId, first: $first) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          heat
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ENTERTAINMENT_INFO = `
  query EntertainmentInfo($skip: Long, $first: Long, $id: ID!) {
    entertainmentInfo(id: $id) {
      ... on EntertainmentInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        heat
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_LEARNING_RESOURCE = `
  query AllLearningResource($sortedBy: SortedBy, $course: String, $skip: Long, $first: Long) {
    allLearningResource(sortedBy: $sortedBy, course: $course, skip: $skip, first: $first) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          attachedFileURL
          course
          content
          title
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const SEARCH_LOSTS = `
  query SearchLosts($object: String!) {
    searchLosts(object: $object) {
      ... on MultiLostInfos {
        losts {
          lostTime
          contact
          createTime
          pictureUrl
          position
          description
          name
          publisher {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_ENTERTAINMENTS = `
  query AllEntertainments($sortedBy: SortedBy, $skip: Long, $first: Long) {
    allEntertainments(sortedBy: $sortedBy, skip: $skip, first: $first) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          heat
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const SEARCH_LEARNING_RESOURCES = `
  query SearchLearningResources($title: String!, $skip: Long, $first: Long) {
    searchLearningResources(title: $title) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          attachedFileURL
          course
          content
          title
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_LECTURES = `
  query AllLectures($skip: Long, $first: Long) {
    allLectures(skip: $skip, first: $first) {
      ... on MultiLectures {
        lectures {
          note
          lecturer
          time
          position
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_SCHOOL_HEATS = `
  query AllSchoolHeats($sortedBy: SortedBy, $skip: Long, $first: Long) {
    allSchoolHeats(sortedBy: $sortedBy, skip: $skip, first: $first) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          heat
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const SEARCH_FOUNDS = `
  query SearchFounds($object: String!) {
    searchFounds(object: $object) {
      ... on MultiFoundInfos {
        founds {
          foundTime
          contact
          createTime
          pictureUrl
          position
          description
          name
          publisher {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_LOSTS = `
  query AllLosts($skip: Long, $first: Long) {
    allLosts(skip: $skip, first: $first) {
      ... on MultiLostInfos {
        losts {
          lostTime
          contact
          createTime
          pictureUrl
          position
          description
          name
          publisher {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const SEARCH = `
  query Search($skip: Long, $first: Long, $content: String!) {
    search(skip: $skip, first: $first, content: $content) {
      ... on Searchs {
        searchs {
          ... on PersonalInfo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          ... on EntertainmentInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            heat
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            heat
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            title
            id
          }
        }
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_COURSES = `
  query AllCourses {
    allCourses {
    }
  }
`;

const SEARCH_LECTURES = `
  query SearchLectures($skip: Long, $title: String!, $first: Long) {
    searchLectures(skip: $skip, title: $title, first: $first) {
      ... on MultiLectures {
        lectures {
          note
          lecturer
          time
          position
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const SCHOOL_HEAT_INFO = `
  query SchoolHeatInfo($skip: Long, $first: Long, $id: ID!) {
    schoolHeatInfo(id: $id) {
      ... on SchoolHeatInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        heat
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const NEWS = `
  query News {
    news {
      ... on Newss {
        newss {
          pictureURL
          editTime {
          }
          postTime {
          }
          posterId
          content
          title
          id
        }
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ALL_FOUNDS = `
  query AllFounds($skip: Long, $first: Long) {
    allFounds(skip: $skip, first: $first) {
      ... on MultiFoundInfos {
        founds {
          foundTime
          contact
          createTime
          pictureUrl
          position
          description
          name
          publisher {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const LOST_INFO = `
  query LostInfo($id: ID!) {
    lostInfo(id: $id) {
      ... on LostInfo {
        lostTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const FOUND_INFO = `
  query FoundInfo($id: ID!) {
    foundInfo(id: $id) {
      ... on FoundInfo {
        foundTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const LECTURE_INFO = `
  query LectureInfo($id: ID!) {
    lectureInfo(id: $id) {
      ... on LectureInfo {
        note
        lecturer
        time
        position
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const LEARNING_RESOURCE_INFO = `
  query LearningResourceInfo($skip: Long, $first: Long, $id: ID!) {
    learningResourceInfo(id: $id) {
      ... on LearningResourceInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        attachedFileURL
        course
        content
        title
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const ENTERTAINMENTS_OF_AUTHOR = `
  query EntertainmentsOfAuthor($skip: Long, $authorId: ID!, $first: Long) {
    entertainmentsOfAuthor(skip: $skip, authorId: $authorId, first: $first) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          heat
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const LEARNING_RESOURCES_OF_AUTHOR = `
  query LearningResourcesOfAuthor($skip: Long, $authorId: ID!, $first: Long) {
    learningResourcesOfAuthor(skip: $skip, authorId: $authorId, first: $first) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          attachedFileURL
          course
          content
          title
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const LATESTS = `
  query Latests($skip: Long, $first: Long) {
    latests {
      ... on Latests {
        latests {
          ... on LearningResourceInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            attachedFileURL
            course
            content
            title
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            id
          }
          ... on EntertainmentInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            heat
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            heat
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            title
            id
          }
        }
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const HOTS = `
  query Hots($skip: Long, $first: Long) {
    hots {
      ... on Hots {
        hots {
          ... on LearningResourceInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            attachedFileURL
            course
            content
            title
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            id
          }
          ... on EntertainmentInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            heat
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(skip: skip, first: first) {
              comments {
                allReplies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureUrl
                    userId
                  }
                  content
                  id
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                postIdCommenting
                id
              }
              totalCount
            }
            heat
            createTime
            latestActiveTime
            latestCommenter {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            title
            id
          }
        }
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const SEARCH_SCHOOL_HEATS = `
  query SearchSchoolHeats($title: String!, $skip: Long, $first: Long) {
    searchSchoolHeats(title: $title) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          heat
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const NEWS_INFO = `
  query NewsInfo($newsId: String!) {
    newsInfo(newsId: $newsId) {
      pictureURL
      editTime {
      }
      postTime {
      }
      posterId
      content
      title
      id
    }
  }
`;

const SEARCH_ENTERTAINMENTS = `
  query SearchEntertainments($title: String!, $skip: Long, $first: Long) {
    searchEntertainments(title: $title) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(skip: skip, first: first) {
            comments {
              allReplies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureUrl
                  userId
                }
                content
                id
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              postIdCommenting
              id
            }
            totalCount
          }
          heat
          createTime
          latestActiveTime
          latestCommenter {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          title
          id
        }
        totalCount
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_LEARNING_RESOURCE_COMMENT_REPLY = `
  mutation CreateLearningResourceCommentReply($learningResourceReplyInput: LearningResourceReplyInput) {
    createLearningResourceCommentReply(learningResourceReplyInput: $learningResourceReplyInput) {
      ... on ReplyInfo {
        replyTo {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CLAIM_LOST = `
  mutation ClaimLost($userId: ID!, $lostId: ID!) {
    claimLost(lostId: $lostId, userId: $userId) {
      ... on LostInfo {
        lostTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_LOST = `
  mutation DeleteLost($id: ID!) {
    deleteLost(id: $id) {
      ... on LostInfo {
        lostTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const EDIT_NEWS = `
  mutation EditNews($newsId: String!, $newsInput: NewsInput!) {
    editNews(newsId: $newsId, newsInput: $newsInput) {
      ... on NewsItem {
        pictureURL
        editTime {
        }
        postTime {
        }
        posterId
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_SCHOOL_HEAT_COMMENT = `
  mutation CreateSchoolHeatComment($schoolHeatCommentInput: SchoolHeatCommentInput!) {
    createSchoolHeatComment(schoolHeatCommentInput: $schoolHeatCommentInput) {
      ... on CommentInfo {
        allReplies {
          replyTo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          id
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        postIdCommenting
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_LEARNING_RESOURCE_COMMENT = `
  mutation CreateLearningResourceComment($learningResourceCommentInput: LearningResourceCommentInput!) {
    createLearningResourceComment(learningResourceCommentInput: $learningResourceCommentInput) {
      ... on CommentInfo {
        allReplies {
          replyTo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          id
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        postIdCommenting
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_SCHOOL_HEAT_COMMENT_REPLY = `
  mutation CreateSchoolHeatCommentReply($schoolHeatReplyInput: SchoolHeatReplyInput) {
    createSchoolHeatCommentReply(schoolHeatReplyInput: $schoolHeatReplyInput) {
      ... on ReplyInfo {
        replyTo {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT_COMMENT_REPLY = `
  mutation DeleteEntertainmentCommentReply($rpyId: ID!, $etmtId: ID!, $cmmtId: ID!) {
    deleteEntertainmentCommentReply(rpyId: $rpyId, etmtId: $etmtId, cmmtId: $cmmtId) {
      ... on ReplyInfo {
        replyTo {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_ENTERTAINMENT = `
  mutation CreateEntertainment($skip: Long, $first: Long, $entertainmentInput: EntertainmentInput!) {
    createEntertainment(entertainmentInput: $entertainmentInput) {
      ... on EntertainmentInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        heat
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_ENTERTAINMENT_COMMENT = `
  mutation CreateEntertainmentComment($entertainmentCommentInput: EntertainmentCommentInput!) {
    createEntertainmentComment(entertainmentCommentInput: $entertainmentCommentInput) {
      ... on CommentInfo {
        allReplies {
          replyTo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          id
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        postIdCommenting
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_FOUND = `
  mutation CreateFound($foundInput: FoundInput!) {
    createFound(foundInput: $foundInput) {
      ... on FoundInfo {
        foundTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT = `
  mutation DeleteSchoolHeat($skip: Long, $first: Long, $id: ID!) {
    deleteSchoolHeat(id: $id) {
      ... on SchoolHeatInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        heat
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT_COMMENT_REPLY = `
  mutation DeleteSchoolHeatCommentReply($shId: ID!, $rpyId: ID!, $cmmtId: ID!) {
    deleteSchoolHeatCommentReply(shId: $shId, rpyId: $rpyId, cmmtId: $cmmtId) {
      ... on ReplyInfo {
        replyTo {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_LOST = `
  mutation CreateLost($lostInput: LostInput!) {
    createLost(lostInput: $lostInput) {
      ... on LostInfo {
        lostTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT_COMMENT = `
  mutation DeleteSchoolHeatComment($shId: ID!, $cmmtId: ID!) {
    deleteSchoolHeatComment(shId: $shId, cmmtId: $cmmtId) {
      ... on CommentInfo {
        allReplies {
          replyTo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          id
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        postIdCommenting
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE = `
  mutation DeleteLearningResource($skip: Long, $first: Long, $id: ID!) {
    deleteLearningResource(id: $id) {
      ... on LearningResourceInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        attachedFileURL
        course
        content
        title
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE_COMMENT = `
  mutation DeleteLearningResourceComment($lrId: ID!, $cmmtId: ID!) {
    deleteLearningResourceComment(lrId: $lrId, cmmtId: $cmmtId) {
      ... on CommentInfo {
        allReplies {
          replyTo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          id
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        postIdCommenting
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_FOUND = `
  mutation DeleteFound($id: ID!) {
    deleteFound(id: $id) {
      ... on FoundInfo {
        foundTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_LECTURE = `
  mutation CreateLecture($lectureInput: LectureInput!) {
    createLecture(lectureInput: $lectureInput) {
      ... on LectureInfo {
        note
        lecturer
        time
        position
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_SCHOOL_HEAT = `
  mutation CreateSchoolHeat($skip: Long, $first: Long, $schoolHeatInput: SchoolHeatInput!) {
    createSchoolHeat(schoolHeatInput: $schoolHeatInput) {
      ... on SchoolHeatInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        heat
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE_COMMENT_REPLY = `
  mutation DeleteLearningResourceCommentReply($lrId: ID!, $rpyId: ID!, $cmmtId: ID!) {
    deleteLearningResourceCommentReply(lrId: $lrId, rpyId: $rpyId, cmmtId: $cmmtId) {
      ... on ReplyInfo {
        replyTo {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CLAIM_FOUND = `
  mutation ClaimFound($foundId: ID!, $userId: ID!) {
    claimFound(foundId: $foundId, userId: $userId) {
      ... on FoundInfo {
        foundTime
        contact
        createTime
        pictureUrl
        position
        description
        name
        publisher {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_NEWS = `
  mutation DeleteNews($newsId: String!) {
    deleteNews(newsId: $newsId) {
      ... on NewsItem {
        pictureURL
        editTime {
        }
        postTime {
        }
        posterId
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT_COMMENT = `
  mutation DeleteEntertainmentComment($etmtId: ID!, $cmmtId: ID!) {
    deleteEntertainmentComment(etmtId: $etmtId, cmmtId: $cmmtId) {
      ... on CommentInfo {
        allReplies {
          replyTo {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureUrl
            userId
          }
          content
          id
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        postIdCommenting
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_LEARNING_RESOURCE = `
  mutation CreateLearningResource($learningResourceInput: LearningResourceInput, $skip: Long, $first: Long) {
    createLearningResource(learningResourceInput: $learningResourceInput) {
      ... on LearningResourceInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        attachedFileURL
        course
        content
        title
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const EDIT_LECTURE = `
  mutation EditLecture($lectureInput: LectureInput!, $id: ID!) {
    editLecture(lectureInput: $lectureInput, id: $id) {
      ... on LectureInfo {
        note
        lecturer
        time
        position
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_NEWS = `
  mutation CreateNews($newsInput: NewsInput!) {
    createNews(newsInput: $newsInput) {
      ... on NewsItem {
        pictureURL
        editTime {
        }
        postTime {
        }
        posterId
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT = `
  mutation DeleteEntertainment($skip: Long, $first: Long, $id: ID!) {
    deleteEntertainment(id: $id) {
      ... on EntertainmentInfo {
        allComments(skip: skip, first: first) {
          comments {
            allReplies {
              replyTo {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureUrl
                userId
              }
              content
              id
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureUrl
              userId
            }
            content
            postIdCommenting
            id
          }
          totalCount
        }
        heat
        createTime
        latestActiveTime
        latestCommenter {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const CREATE_ENTERTAINMENT_COMMENT_REPLY = `
  mutation CreateEntertainmentCommentReply($entertainmentReplyInput: EntertainmentReplyInput) {
    createEntertainmentCommentReply(entertainmentReplyInput: $entertainmentReplyInput) {
      ... on ReplyInfo {
        replyTo {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureUrl
          userId
        }
        content
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;

const DELETE_LECTURE = `
  mutation DeleteLecture($id: ID!) {
    deleteLecture(id: $id) {
      ... on LectureInfo {
        note
        lecturer
        time
        position
        content
        title
        id
      }
      ... on Error {
        errMsg
        errCode
      }
    }
  }
`;
