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
        pictureURL
        userId
      }
      ... on Error {
        msg
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
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            attachedFileURL
            course
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
              pictureURL
              userId
            }
            id
          }
          ... on EntertainmentInfo {
            allComments(first: first, skip: skip) {
              comments {
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(first: first, skip: skip) {
              comments {
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            title
            id
          }
        }
      }
      ... on Error {
        msg
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
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            attachedFileURL
            course
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
              pictureURL
              userId
            }
            id
          }
          ... on EntertainmentInfo {
            allComments(first: first, skip: skip) {
              comments {
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(first: first, skip: skip) {
              comments {
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            title
            id
          }
        }
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const NEWS = `
  query News {
    news {
      newss {
        pictureURL
        editTime
        postTime
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
    }
  }
`;

const NEWS_INFO = `
  query NewsInfo($newsId: String!) {
    newsInfo(newsId: $newsId) {
      ... on NewsInfo {
        pictureURL
        editTime
        postTime
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
        errCode
      }
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
            pictureURL
            userId
          }
          ... on EntertainmentInfo {
            allComments(first: first, skip: skip) {
              comments {
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            title
            id
          }
          ... on SchoolHeatInfo {
            allComments(first: first, skip: skip) {
              comments {
                allReplies(first: first, skip: skip) {
                  replies {
                    replyTo {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    author {
                      introduction
                      major
                      school
                      grade
                      gender
                      username
                      pictureURL
                      userId
                    }
                    content {
                      items {
                        ... on Paragraph {
                          text
                        }
                        ... on Picture {
                          url
                        }
                      }
                    }
                    id
                  }
                  totalCount
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
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
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            title
            id
          }
        }
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
            allReplies(first: first, skip: skip) {
              replies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
                  }
                }
                id
              }
              totalCount
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
            allReplies(first: first, skip: skip) {
              replies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
                  }
                }
                id
              }
              totalCount
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          author {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          attachedFileURL
          course
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const ALL_COURSES = `
  query AllCourses {
    allCourses
  }
`;

const LEARNING_RESOURCE_INFO = `
  query LearningResourceInfo($id: ID!, $first: Long, $skip: Long) {
    learningResourceInfo(id: $id) {
      ... on LearningResourceInfo {
        allComments(first: first, skip: skip) {
          comments {
            allReplies(first: first, skip: skip) {
              replies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
                  }
                }
                id
              }
              totalCount
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
          pictureURL
          userId
        }
        attachedFileURL
        course
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
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
          pictureURL
          userId
        }
        id
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          attachedFileURL
          course
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
              allReplies(first: first, skip: skip) {
                replies {
                  replyTo {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  author {
                    introduction
                    major
                    school
                    grade
                    gender
                    username
                    pictureURL
                    userId
                  }
                  content {
                    items {
                      ... on Paragraph {
                        text
                      }
                      ... on Picture {
                        url
                      }
                    }
                  }
                  id
                }
                totalCount
              }
              author {
                introduction
                major
                school
                grade
                gender
                username
                pictureURL
                userId
              }
              content {
                items {
                  ... on Paragraph {
                    text
                  }
                  ... on Picture {
                    url
                  }
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
            pictureURL
            userId
          }
          attachedFileURL
          course
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
          claimer {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          foundTime
          contact
          createTime
          pictureURL
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const FOUND_INFO = `
  query FoundInfo($id: ID!) {
    foundInfo(id: $id) {
      ... on FoundInfo {
        claimer {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        foundTime
        contact
        createTime
        pictureURL
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
          pictureURL
          userId
        }
        id
      }
      ... on Error {
        msg
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
          claimer {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          foundTime
          contact
          createTime
          pictureURL
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
          claimer {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          lostTime
          contact
          createTime
          pictureURL
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const LOST_INFO = `
  query LostInfo($id: ID!) {
    lostInfo(id: $id) {
      ... on LostInfo {
        claimer {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        lostTime
        contact
        createTime
        pictureURL
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
          pictureURL
          userId
        }
        id
      }
      ... on Error {
        msg
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
          claimer {
            introduction
            major
            school
            grade
            gender
            username
            pictureURL
            userId
          }
          lostTime
          contact
          createTime
          pictureURL
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
            pictureURL
            userId
          }
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
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
          content {
            items {
              ... on Paragraph {
                text
              }
              ... on Picture {
                url
              }
            }
          }
          title
          id
        }
        totalCount
      }
      ... on Error {
        msg
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
        pictureURL
        userId
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const ALL_MAJORS = `
  query AllMajors {
    allMajors
  }
`;

const ALL_SCHOOLS = `
  query AllSchools {
    allSchools
  }
`;

const MAJORS_IN = `
  query MajorsIn($school: String!) {
    majorsIn(school: $school)
  }
`;

const SIGNUP = `
  mutation Signup($signup: SignupInput!) {
    signup(signup: $signup) {
      ... on LoggedInToken {
        token
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const LOGIN = `
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      ... on LoggedInToken {
        token
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const LOGOUT = `
  mutation Logout {
    logout {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CREATE_NEWS = `
  mutation CreateNews($newsInput: NewsInput!) {
    createNews(newsInput: $newsInput) {
      ... on NewsInfo {
        pictureURL
        editTime
        postTime
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_NEWS = `
  mutation DeleteNews($newsId: String!) {
    deleteNews(newsId: $newsId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const EDIT_NEWS = `
  mutation EditNews($newsInput: NewsInput!, $newsId: String!) {
    editNews(newsInput: $newsInput, newsId: $newsId) {
      ... on NewsInfo {
        pictureURL
        editTime
        postTime
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
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
            allReplies(first: first, skip: skip) {
              replies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
                  }
                }
                id
              }
              totalCount
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT = `
  mutation DeleteSchoolHeat($id: ID!) {
    deleteSchoolHeat(id: $id) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CREATE_SCHOOL_HEAT_COMMENT = `
  mutation CreateSchoolHeatComment($schoolHeatCommentInput: SchoolHeatCommentInput!, $first: Long, $skip: Long) {
    createSchoolHeatComment(schoolHeatCommentInput: $schoolHeatCommentInput) {
      ... on CommentInfo {
        allReplies(first: first, skip: skip) {
          replies {
            replyTo {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            id
          }
          totalCount
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT_COMMENT = `
  mutation DeleteSchoolHeatComment($cmmtId: ID!, $shId: ID!) {
    deleteSchoolHeatComment(cmmtId: $cmmtId, shId: $shId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_SCHOOL_HEAT_COMMENT_REPLY = `
  mutation DeleteSchoolHeatCommentReply($rpyId: ID!, $cmmtId: ID!, $shId: ID!) {
    deleteSchoolHeatCommentReply(rpyId: $rpyId, cmmtId: $cmmtId, shId: $shId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
            allReplies(first: first, skip: skip) {
              replies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
                  }
                }
                id
              }
              totalCount
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT = `
  mutation DeleteEntertainment($id: ID!) {
    deleteEntertainment(id: $id) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CREATE_ENTERTAINMENT_COMMENT = `
  mutation CreateEntertainmentComment($entertainmentCommentInput: EntertainmentCommentInput!, $first: Long, $skip: Long) {
    createEntertainmentComment(entertainmentCommentInput: $entertainmentCommentInput) {
      ... on CommentInfo {
        allReplies(first: first, skip: skip) {
          replies {
            replyTo {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            id
          }
          totalCount
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT_COMMENT = `
  mutation DeleteEntertainmentComment($cmmtId: ID!, $etmtId: ID!) {
    deleteEntertainmentComment(cmmtId: $cmmtId, etmtId: $etmtId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_ENTERTAINMENT_COMMENT_REPLY = `
  mutation DeleteEntertainmentCommentReply($rpyId: ID!, $cmmtId: ID!, $etmtId: ID!) {
    deleteEntertainmentCommentReply(rpyId: $rpyId, cmmtId: $cmmtId, etmtId: $etmtId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
            allReplies(first: first, skip: skip) {
              replies {
                replyTo {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                author {
                  introduction
                  major
                  school
                  grade
                  gender
                  username
                  pictureURL
                  userId
                }
                content {
                  items {
                    ... on Paragraph {
                      text
                    }
                    ... on Picture {
                      url
                    }
                  }
                }
                id
              }
              totalCount
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
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
          pictureURL
          userId
        }
        attachedFileURL
        course
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
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
          pictureURL
          userId
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE = `
  mutation DeleteLearningResource($id: ID!) {
    deleteLearningResource(id: $id) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CREATE_LEARNING_RESOURCE_COMMENT = `
  mutation CreateLearningResourceComment($learningResourceCommentInput: LearningResourceCommentInput!, $first: Long, $skip: Long) {
    createLearningResourceComment(learningResourceCommentInput: $learningResourceCommentInput) {
      ... on CommentInfo {
        allReplies(first: first, skip: skip) {
          replies {
            replyTo {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            author {
              introduction
              major
              school
              grade
              gender
              username
              pictureURL
              userId
            }
            content {
              items {
                ... on Paragraph {
                  text
                }
                ... on Picture {
                  url
                }
              }
            }
            id
          }
          totalCount
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE_COMMENT = `
  mutation DeleteLearningResourceComment($cmmtId: ID!, $lrId: ID!) {
    deleteLearningResourceComment(cmmtId: $cmmtId, lrId: $lrId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
          pictureURL
          userId
        }
        author {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_LEARNING_RESOURCE_COMMENT_REPLY = `
  mutation DeleteLearningResourceCommentReply($rpyId: ID!, $cmmtId: ID!, $lrId: ID!) {
    deleteLearningResourceCommentReply(rpyId: $rpyId, cmmtId: $cmmtId, lrId: $lrId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CREATE_FOUND = `
  mutation CreateFound($foundInput: FoundInput!) {
    createFound(foundInput: $foundInput) {
      ... on FoundInfo {
        claimer {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        foundTime
        contact
        createTime
        pictureURL
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
          pictureURL
          userId
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_FOUND = `
  mutation DeleteFound($foundId: ID!) {
    deleteFound(foundId: $foundId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CLAIM_FOUND = `
  mutation ClaimFound($foundId: ID!) {
    claimFound(foundId: $foundId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CANCEL_CLAIM_FOUND = `
  mutation CancelClaimFound($foundId: ID!) {
    cancelClaimFound(foundId: $foundId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CREATE_LOST = `
  mutation CreateLost($lostInput: LostInput!) {
    createLost(lostInput: $lostInput) {
      ... on LostInfo {
        claimer {
          introduction
          major
          school
          grade
          gender
          username
          pictureURL
          userId
        }
        lostTime
        contact
        createTime
        pictureURL
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
          pictureURL
          userId
        }
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_LOST = `
  mutation DeleteLost($id: ID!) {
    deleteLost(id: $id) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CLAIM_LOST = `
  mutation ClaimLost($lostId: ID!) {
    claimLost(lostId: $lostId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CANCEL_CLAIM_LOST = `
  mutation CancelClaimLost($foundId: ID!) {
    cancelClaimLost(foundId: $foundId) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
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
        content {
          items {
            ... on Paragraph {
              text
            }
            ... on Picture {
              url
            }
          }
        }
        title
        id
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const DELETE_LECTURE = `
  mutation DeleteLecture($id: ID!) {
    deleteLecture(id: $id) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
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
        pictureURL
        userId
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CONFIRM_PASSWORD = `
  mutation ConfirmPassword($comfirmInput: LoginInput!) {
    confirmPassword(comfirmInput: $comfirmInput) {
      ... on ResetPassToken {
        resetToken
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;

const CHANGE_PASSWORD = `
  mutation ChangePassword($newPassword: String!, $resetToken: String!) {
    changePassword(newPassword: $newPassword, resetToken: $resetToken) {
      ... on Ok {
        ok
      }
      ... on Error {
        msg
        errCode
      }
    }
  }
`;
