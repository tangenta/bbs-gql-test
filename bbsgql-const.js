const CURRENT_USER = `
  query CurrentUser {
    currentUser {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const HOTS = `
  query Hots($first: Long, $skip: Long) {
    hots {
      ... on Hots {
        hots {
          ... on LearningResourceInfo {
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
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
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
            title
            id
          }
        }
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const LATESTS = `
  query Latests($first: Long, $skip: Long) {
    latests {
      ... on Latests {
        latests {
          ... on LearningResourceInfo {
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
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
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
            title
            id
          }
        }
      }
      ... on BError {
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
          content {
            items {
            }
          }
          title
          id
        }
      }
      ... on BError {
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
      content {
        items {
        }
      }
      title
      id
    }
  }
`;

const SEARCH = `
  query Search($first: Long, $skip: Long, $content: String!) {
    search(first: $first, skip: $skip, content: $content) {
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
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(first: first, skip: skip) {
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
                  content {
                    items {
                    }
                  }
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
                content {
                  items {
                  }
                }
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
            content {
              items {
              }
            }
            title
            id
          }
        }
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_SCHOOL_HEATS = `
  query AllSchoolHeats($sortedBy: SortedBy, $first: Long, $skip: Long) {
    allSchoolHeats(sortedBy: $sortedBy, first: $first, skip: $skip) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
          title
          id
        }
        totalCount
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const SCHOOL_HEAT_INFO = `
  query SchoolHeatInfo($id: ID!, $first: Long, $skip: Long) {
    schoolHeatInfo(id: $id) {
      ... on SchoolHeatInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const SCHOOL_HEATS_OF_AUTHOR = `
  query SchoolHeatsOfAuthor($first: Long, $skip: Long, $authorId: ID!) {
    schoolHeatsOfAuthor(first: $first, skip: $skip, authorId: $authorId) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
          title
          id
        }
        totalCount
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const SEARCH_SCHOOL_HEATS = `
  query SearchSchoolHeats($title: String!, $first: Long, $skip: Long) {
    searchSchoolHeats(title: $title) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
          title
          id
        }
        totalCount
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_ENTERTAINMENTS = `
  query AllEntertainments($sortedBy: SortedBy, $first: Long, $skip: Long) {
    allEntertainments(sortedBy: $sortedBy, first: $first, skip: $skip) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
          title
          id
        }
        totalCount
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const ENTERTAINMENT_INFO = `
  query EntertainmentInfo($id: ID!, $first: Long, $skip: Long) {
    entertainmentInfo(id: $id) {
      ... on EntertainmentInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const ENTERTAINMENTS_OF_AUTHOR = `
  query EntertainmentsOfAuthor($first: Long, $skip: Long, $authorId: ID!) {
    entertainmentsOfAuthor(first: $first, skip: $skip, authorId: $authorId) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
          title
          id
        }
        totalCount
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const SEARCH_ENTERTAINMENTS = `
  query SearchEntertainments($title: String!, $first: Long, $skip: Long) {
    searchEntertainments(title: $title) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
          title
          id
        }
        totalCount
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_LEARNING_RESOURCE = `
  query AllLearningResource($sortedBy: SortedBy, $course: String, $first: Long, $skip: Long) {
    allLearningResource(sortedBy: $sortedBy, course: $course, first: $first, skip: $skip) {
      ... on MultiLearningResources {
        learningResources {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
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
      ... on BError {
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

const LEARNING_RESOURCE_INFO = `
  query LearningResourceInfo($id: ID!, $first: Long, $skip: Long) {
    learningResourceInfo(id: $id) {
      ... on LearningResourceInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
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
      ... on BError {
        errCode
      }
    }
  }
`;

const LEARNING_RESOURCES_OF_AUTHOR = `
  query LearningResourcesOfAuthor($first: Long, $skip: Long, $authorId: ID!) {
    learningResourcesOfAuthor(first: $first, skip: $skip, authorId: $authorId) {
      ... on MultiLearningResources {
        learningResources {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
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
      ... on BError {
        errCode
      }
    }
  }
`;

const SEARCH_LEARNING_RESOURCES = `
  query SearchLearningResources($title: String!, $first: Long, $skip: Long) {
    searchLearningResources(title: $title) {
      ... on MultiLearningResources {
        learningResources {
          allComments(first: first, skip: skip) {
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
                content {
                  items {
                  }
                }
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
              content {
                items {
                }
              }
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
          content {
            items {
            }
          }
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
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_FOUNDS = `
  query AllFounds($first: Long, $skip: Long) {
    allFounds(first: $first, skip: $skip) {
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
      ... on BError {
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
      ... on BError {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_LOSTS = `
  query AllLosts($first: Long, $skip: Long) {
    allLosts(first: $first, skip: $skip) {
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
      ... on BError {
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
      ... on BError {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_LECTURES = `
  query AllLectures($first: Long, $skip: Long) {
    allLectures(first: $first, skip: $skip) {
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
      ... on BError {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const SEARCH_LECTURES = `
  query SearchLectures($first: Long, $skip: Long, $title: String!) {
    searchLectures(first: $first, skip: $skip, title: $title) {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const PERSON_INFO = `
  query PersonInfo($id: ID!) {
    personInfo(id: $id) {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const ALL_MAJORS = `
  query AllMajors {
    allMajors {
    }
  }
`;

const ALL_ACADEMIES = `
  query AllAcademies {
    allAcademies {
    }
  }
`;

const MAJORS_IN = `
  query MajorsIn($academy: String!) {
    majorsIn(academy: $academy) {
    }
  }
`;

const SIGNUP = `
  mutation Signup($signup: SignupInput!) {
    signup(signup: $signup) {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const LOGIN = `
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const LOGOUT = `
  mutation Logout {
    logout {
      ... on Ok {
        ok {
        }
      }
      ... on BError {
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const EDIT_NEWS = `
  mutation EditNews($newsInput: NewsInput!, $newsId: String!) {
    editNews(newsInput: $newsInput, newsId: $newsId) {
      ... on NewsItem {
        pictureURL
        editTime {
        }
        postTime {
        }
        posterId
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const CREATE_SCHOOL_HEAT = `
  mutation CreateSchoolHeat($schoolHeatInput: SchoolHeatInput!, $first: Long, $skip: Long) {
    createSchoolHeat(schoolHeatInput: $schoolHeatInput) {
      ... on SchoolHeatInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT = `
  mutation DeleteSchoolHeat($id: ID!, $first: Long, $skip: Long) {
    deleteSchoolHeat(id: $id) {
      ... on SchoolHeatInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
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
          content {
            items {
            }
          }
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT_COMMENT = `
  mutation DeleteSchoolHeatComment($cmmtId: ID!, $shId: ID!) {
    deleteSchoolHeatComment(cmmtId: $cmmtId, shId: $shId) {
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
          content {
            items {
            }
          }
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT_COMMENT_REPLY = `
  mutation DeleteSchoolHeatCommentReply($rpyId: ID!, $cmmtId: ID!, $shId: ID!) {
    deleteSchoolHeatCommentReply(rpyId: $rpyId, cmmtId: $cmmtId, shId: $shId) {
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const CREATE_ENTERTAINMENT = `
  mutation CreateEntertainment($entertainmentInput: EntertainmentInput!, $first: Long, $skip: Long) {
    createEntertainment(entertainmentInput: $entertainmentInput) {
      ... on EntertainmentInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT = `
  mutation DeleteEntertainment($id: ID!, $first: Long, $skip: Long) {
    deleteEntertainment(id: $id) {
      ... on EntertainmentInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
        title
        id
      }
      ... on BError {
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
          content {
            items {
            }
          }
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT_COMMENT = `
  mutation DeleteEntertainmentComment($cmmtId: ID!, $etmtId: ID!) {
    deleteEntertainmentComment(cmmtId: $cmmtId, etmtId: $etmtId) {
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
          content {
            items {
            }
          }
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT_COMMENT_REPLY = `
  mutation DeleteEntertainmentCommentReply($rpyId: ID!, $cmmtId: ID!, $etmtId: ID!) {
    deleteEntertainmentCommentReply(rpyId: $rpyId, cmmtId: $cmmtId, etmtId: $etmtId) {
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const CREATE_LEARNING_RESOURCE = `
  mutation CreateLearningResource($learningResourceInput: LearningResourceInput, $first: Long, $skip: Long) {
    createLearningResource(learningResourceInput: $learningResourceInput) {
      ... on LearningResourceInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
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
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE = `
  mutation DeleteLearningResource($id: ID!, $first: Long, $skip: Long) {
    deleteLearningResource(id: $id) {
      ... on LearningResourceInfo {
        allComments(first: first, skip: skip) {
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
              content {
                items {
                }
              }
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
            content {
              items {
              }
            }
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
        content {
          items {
          }
        }
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
      ... on BError {
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
          content {
            items {
            }
          }
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE_COMMENT = `
  mutation DeleteLearningResourceComment($cmmtId: ID!, $lrId: ID!) {
    deleteLearningResourceComment(cmmtId: $cmmtId, lrId: $lrId) {
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
          content {
            items {
            }
          }
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE_COMMENT_REPLY = `
  mutation DeleteLearningResourceCommentReply($rpyId: ID!, $cmmtId: ID!, $lrId: ID!) {
    deleteLearningResourceCommentReply(rpyId: $rpyId, cmmtId: $cmmtId, lrId: $lrId) {
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
        content {
          items {
          }
        }
        id
      }
      ... on BError {
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
      ... on BError {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const CLAIM_FOUND = `
  mutation ClaimFound($userId: ID!, $foundId: ID!) {
    claimFound(userId: $userId, foundId: $foundId) {
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
      ... on BError {
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
      ... on BError {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const CLAIM_LOST = `
  mutation ClaimLost($userId: ID!, $lostId: ID!) {
    claimLost(userId: $userId, lostId: $lostId) {
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
      ... on BError {
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
      ... on BError {
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
      ... on BError {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const EDIT_PERSON_INFO = `
  mutation EditPersonInfo($personInfoInput: PersonInfoInput!) {
    editPersonInfo(personInfoInput: $personInfoInput) {
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
      ... on BError {
        errCode
      }
    }
  }
`;

const CONFIRM_PASSWORD = `
  mutation ConfirmPassword($comfirmInput: LoginInput!) {
    confirmPassword(comfirmInput: $comfirmInput) {
      ... on ResetToken {
        resetToken
      }
      ... on BError {
        errCode
      }
    }
  }
`;

const CHANGE_PASSWORD = `
  mutation ChangePassword($newPassword: String!, $resetToken: String!) {
    changePassword(newPassword: $newPassword, resetToken: $resetToken) {
      ... on Ok {
        ok {
        }
      }
      ... on BError {
        errCode
      }
    }
  }
`;
