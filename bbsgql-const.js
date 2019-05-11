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
  query Hots($skip: Long, $first: Long) {
    hots {
      ... on Hots {
        hots {
          ... on LearningResourceInfo {
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
  query Latests($skip: Long, $first: Long) {
    latests {
      ... on Latests {
        latests {
          ... on LearningResourceInfo {
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
  query Search($content: String!, $skip: Long, $first: Long) {
    search(content: $content, skip: $skip, first: $first) {
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
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
            allComments(skip: $skip, first: $first) {
              comments {
                creationTime
                allReplies(skip: $skip, first: $first) {
                  replies {
                    creationTime
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
  query AllSchoolHeats($skip: Long, $first: Long, $sortedBy: SortedBy) {
    allSchoolHeats(skip: $skip, first: $first, sortedBy: $sortedBy) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query SchoolHeatInfo($id: ID!, $skip: Long, $first: Long) {
    schoolHeatInfo(id: $id) {
      ... on SchoolHeatInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            creationTime
            allReplies(skip: $skip, first: $first) {
              replies {
                creationTime
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
  query SchoolHeatsOfAuthor($authorId: ID!, $skip: Long, $first: Long) {
    schoolHeatsOfAuthor(authorId: $authorId, skip: $skip, first: $first) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query SearchSchoolHeats($title: String!, $skip: Long, $first: Long) {
    searchSchoolHeats(title: $title) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query AllEntertainments($skip: Long, $first: Long, $sortedBy: SortedBy) {
    allEntertainments(skip: $skip, first: $first, sortedBy: $sortedBy) {
      ... on MultiEntertainments {
        entertainments {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query EntertainmentInfo($id: ID!, $skip: Long, $first: Long) {
    entertainmentInfo(id: $id) {
      ... on EntertainmentInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            creationTime
            allReplies(skip: $skip, first: $first) {
              replies {
                creationTime
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
  query EntertainmentsOfAuthor($authorId: ID!, $skip: Long, $first: Long) {
    entertainmentsOfAuthor(authorId: $authorId, skip: $skip, first: $first) {
      ... on MultiEntertainments {
        entertainments {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query SearchEntertainments($title: String!, $skip: Long, $first: Long) {
    searchEntertainments(title: $title) {
      ... on MultiEntertainments {
        entertainments {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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

const ALL_LEARNING_RESOURCES = `
  query AllLearningResources($skip: Long, $first: Long, $course: String, $sortedBy: SortedBy) {
    allLearningResources(skip: $skip, first: $first, course: $course, sortedBy: $sortedBy) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query LearningResourceInfo($id: ID!, $skip: Long, $first: Long) {
    learningResourceInfo(id: $id) {
      ... on LearningResourceInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            creationTime
            allReplies(skip: $skip, first: $first) {
              replies {
                creationTime
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
  query LearningResourcesOfAuthor($authorId: ID!, $skip: Long, $first: Long) {
    learningResourcesOfAuthor(authorId: $authorId, skip: $skip, first: $first) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query SearchLearningResources($title: String!, $skip: Long, $first: Long) {
    searchLearningResources(title: $title) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: $skip, first: $first) {
            comments {
              creationTime
              allReplies(skip: $skip, first: $first) {
                replies {
                  creationTime
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
  query AllFounds($skip: Long, $first: Long) {
    allFounds(skip: $skip, first: $first) {
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
  query AllLosts($skip: Long, $first: Long) {
    allLosts(skip: $skip, first: $first) {
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
  query AllLectures($skip: Long, $first: Long) {
    allLectures(skip: $skip, first: $first) {
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
  query SearchLectures($title: String!, $skip: Long, $first: Long) {
    searchLectures(title: $title, skip: $skip, first: $first) {
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
  mutation EditNews($newsId: String!, $newsInput: NewsInput!) {
    editNews(newsId: $newsId, newsInput: $newsInput) {
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
  mutation CreateSchoolHeat($schoolHeatInput: SchoolHeatInput!, $skip: Long, $first: Long) {
    createSchoolHeat(schoolHeatInput: $schoolHeatInput) {
      ... on SchoolHeatInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            creationTime
            allReplies(skip: $skip, first: $first) {
              replies {
                creationTime
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
  mutation CreateSchoolHeatComment($schoolHeatCommentInput: SchoolHeatCommentInput!, $skip: Long, $first: Long) {
    createSchoolHeatComment(schoolHeatCommentInput: $schoolHeatCommentInput) {
      ... on CommentInfo {
        creationTime
        allReplies(skip: $skip, first: $first) {
          replies {
            creationTime
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
  mutation DeleteSchoolHeatComment($shId: ID!, $cmmtId: ID!) {
    deleteSchoolHeatComment(shId: $shId, cmmtId: $cmmtId) {
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
        creationTime
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
  mutation DeleteSchoolHeatCommentReply($shId: ID!, $cmmtId: ID!, $rpyId: ID!) {
    deleteSchoolHeatCommentReply(shId: $shId, cmmtId: $cmmtId, rpyId: $rpyId) {
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
  mutation CreateEntertainment($entertainmentInput: EntertainmentInput!, $skip: Long, $first: Long) {
    createEntertainment(entertainmentInput: $entertainmentInput) {
      ... on EntertainmentInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            creationTime
            allReplies(skip: $skip, first: $first) {
              replies {
                creationTime
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
  mutation CreateEntertainmentComment($entertainmentCommentInput: EntertainmentCommentInput!, $skip: Long, $first: Long) {
    createEntertainmentComment(entertainmentCommentInput: $entertainmentCommentInput) {
      ... on CommentInfo {
        creationTime
        allReplies(skip: $skip, first: $first) {
          replies {
            creationTime
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
  mutation DeleteEntertainmentComment($etmtId: ID!, $cmmtId: ID!) {
    deleteEntertainmentComment(etmtId: $etmtId, cmmtId: $cmmtId) {
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
        creationTime
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
  mutation DeleteEntertainmentCommentReply($etmtId: ID!, $cmmtId: ID!, $rpyId: ID!) {
    deleteEntertainmentCommentReply(etmtId: $etmtId, cmmtId: $cmmtId, rpyId: $rpyId) {
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
  mutation CreateLearningResource($learningResourceInput: LearningResourceInput, $skip: Long, $first: Long) {
    createLearningResource(learningResourceInput: $learningResourceInput) {
      ... on LearningResourceInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            creationTime
            allReplies(skip: $skip, first: $first) {
              replies {
                creationTime
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
  mutation CreateLearningResourceComment($learningResourceCommentInput: LearningResourceCommentInput!, $skip: Long, $first: Long) {
    createLearningResourceComment(learningResourceCommentInput: $learningResourceCommentInput) {
      ... on CommentInfo {
        creationTime
        allReplies(skip: $skip, first: $first) {
          replies {
            creationTime
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
  mutation DeleteLearningResourceComment($lrId: ID!, $cmmtId: ID!) {
    deleteLearningResourceComment(lrId: $lrId, cmmtId: $cmmtId) {
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
        creationTime
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
  mutation DeleteLearningResourceCommentReply($lrId: ID!, $cmmtId: ID!, $rpyId: ID!) {
    deleteLearningResourceCommentReply(lrId: $lrId, cmmtId: $cmmtId, rpyId: $rpyId) {
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
  mutation EditLecture($id: ID!, $lectureInput: LectureOptionalInput!) {
    editLecture(id: $id, lectureInput: $lectureInput) {
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
  mutation ChangePassword($resetToken: String!, $newPassword: String!) {
    changePassword(resetToken: $resetToken, newPassword: $newPassword) {
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

const PICTURE_BASE64 = 'png iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAUiklEQVR4Xu2deXzUZP7HP5mZTmemB71ouUoLtMjhUUEQECsgcnns6rrruqKLUA45BNRyyaHiz2sR3FVBdl2ORVE5xBUEYcEDREEtpVBouWFdhVIKbekxSSbJ75UprT1mksxMMpOZPvkP5nm+yfPJu5/vkydPnocCOYgCGihAaRCThCQKgIBFINBEAQKWJrKSoAQswoAmChCwNJGVBCVgEQY0UYCApYmsJCgBizCgiQIELE1kJUEJWIQBTRQgYGkiKwlKwCIMaKIAAUsTWUlQAhZhQBMFCFiayEqCErAIA5ooQMDSRFYSlIBFGNBEAQKWJrKSoAQswoAmChCwNJGVBA15sNqsKni4kmae560RxeYw41MlD3fYT2679gqEJFhJ/zqZyDGVixyM4wGGZSJ4gxH2yBinmlYjdckCasWVhE7zMYKitZe4eZ4hpMAS3Ymm7fPsDNNF4Pm6ttUHq/Y2myiKsxoN+8wmw9PExdSHP+jBSlhztLWhmvkLw7L3MyxrcyWRK7Dql3O6GGVYccXS6Tn8gapWX+bmFzFowWq1Iv/PjJ2ZQzuY9Pru5A1YtXWMoHib0bDfZAzLvjIyZW/zw8G3Fke8nd/KYmQXsQ72/qACK371sbYGu/11hqHvYx0Oq1IZ5BzLVRyrkSoJo4yry60d5xIXk1Y6YfmRP/EO+zyaZa4TBMHJVFCAlfRufhbrYLNpmpZ1J/eO1UIphw3KOV3MJLqYmbhYPWWsyw62tUF4jXWwv3U4HE26ILoFK3Z5fnsTHItphr7b4XBYvKLiWiWnY0XUPBX6cjhdzGBYXW5Pm4fxVJUvsYK1bst38sawHDODYdl0XHMnV23RHViJ7xwax/LsDIamO9baqq83wZtUKHVO0cUsRuSEGc3ZpY91+NrX69N7/bh/5LWDg3+dZZh7OU5ZF0QXYDndiWOW0Bw7wsH65k5qp0K5m24xUFfMBsOacjp9dqi5WMKy3LEOnstmGCZNyp305ViCQLV699AEmmGeYRimg1ru5BYsFVKhvItROSaDaXbZqE675IDU6+/iHznF2RexrOMepe6kC7ASVxzvyNkrljAsPZRzcOH+EFjtVCh3zWaDodRiwNryiNiZ+ENihVx5PfwevzRnEsdxTzEs28FTdwocWIJAJS0/9CTjYKfRDJ2ixoV7cjNqOu/ePRV6cp7GZQ2geKuJyjXxYTPLsvTnYqI7GRz0GwxLj+A4XtU/ck37WC3fOZrOc9WvMwwzlOMcZl9uki91/e1Yrq7V6WJG6v3yiNhZgXax+LdzJnM8N13sgmj1R64+WIJAJS4/+DTLsk/SDNNOqwv3BDS1hhs8Oae7sk4XM1K5Rpjmlmelfa5GTCUxYpblphod3BLGwQznOO27IKqBlbA07zoIjiU0Qw/mOC5MSWP9VSZQqVCufWaKKg83Uh9edSTNwPi4MrnyHv8uCFT8stzJnIOdzrBsqj//yH0DS3SnpQezWY6drBd38vdwg8c320UF0cUsRirPBGpOeVYXn10s+u2ctDBeWEIzzBCe5wLSBfEKrLh3DnQDKyxiWbvu3ClQww1qACbGcLqYgfrwKhU5G1nJlxXHFQQqblnOdJ5hpzIOR7I/3cm3p0JBMMS/dWA2x7ETaZZtHegLVyw4ADEV0pH+fyr05Bobl6UAIdxgyA8zUM9ezeq62V2s6L/mphspxxKGYe4KlDt5BVaNO3Fv0DQzkOc5ky9iBaquE6wADDeo1d4wg+GqmcL6SkNUttPF1gnGuAs50ziee5JhmYC7k8dgxbyx7wzN0KlqCRSoODVg+f4SOlDXX3teioIQwbMnharKVJ7X1wOSC8d1L5fttd28lq9a/HWjOIMJTES0v06n6XksrB2UXf8TKyQ77wQsTRnxKniIgPV1CDlWcHXe3VFnYatDwLFeDSWwSCr0yiK9rCSdCglYXsqqXbXQSIWvEMfSDhHvIocIWF+FUB+LpELvUPaulnQqfCWEwLKFEFh0sA83vBxCYJFxLO+sx8ta0o718pckFXoprFbVQqOP9RIBSytAvI1LwPJWOQ3qkVc6GogqE1I6Fb70ReikQtJ59ytd0mD9XwiBRTrvBCy1FSCpUG1F5eNJOpY1RBxLnI/FhFAqBK3/teGkwXpxV0j0sXgdzMeKNBuQkWBDqwgTEq1hMBtrpLdzAk6X2VHFCiilHcgvsUvagfhUiGCfj2UNJbD87Fj920Ri7A0JuLWVFSlRZlhMBvn8AYDlBeQVV+PdIyX4x6FL4BvVcoIV7CPv1oWh4lhGv8wg7RxrwSv922JwciSizEZFIEkV4gQBhZftWFVwGX87UAyG51HjWMGeChfuDJ1UqJFj2UwGzOvTGo93j0OSTbvvdAUBOFVG49Pjl7B4zymUVDE+g6tlAOk+FgHLrfY9k2xYnNkW/dtGweDV15ne3Vae51FRWYkKVsDhS9XYVFiMDw5fdLqZ3BFjMaFry0h0jrMgtYUV7aLDEWc14ZcKGoWXqrGh4CKKKtQBVhqsF0LFsdRLhcNSW+DNgclIi1F1cRY5Jup+rwWrfgUBwBU7j5wLFVh3pBhbjtf0ze5OT8CojCR0ibci3mLEtecFyXPRnIB95yvx/NdnceRipeLralxQBqz/kFR4TbGMljZ8fF9HdGgRGKBqb5wrsJrefQpi/0wJSFLknC5jMG7LcRy+6PkSX9JgPR9CYHk58i4+y707NBWjusfrYolpZWB5bTRNKopuOOerc1hx4LxHQZsJWN4NkPZvF4Vt96chUoUnPI/uikRhf4MlXooI1+ObT2DbiRLFzSBguZFqQkZLvD2oPQyUH3vmCm5bIMASL4sXgL4r83C2VNlQhzRYz+1odn2sOIsJO3/fGTcnudyWR8Gt17ZIoMASW1XG8Oj8prJd+ZoJWMpS4chuCVgxLBVh/hw/8JDDQIIlXuqOM2V49OOjsldNwAIgdtA/+11nDOug/6+lAw2WSNTg9w7jcJH0k6I0WPO38wJqNt0J5sP5EtrNyLs4WLjvka6ItQTHCk16AOtYiR2ZKw9IItFMwHKdCifenIQ379RfB13qjukBLPH6Ut7YB7vD/Wi/NFjzQsWxGoIlTjTY9VAXZCYH37eGegHr6R2n8V7eBbd/AzJgfR5yqVB8vfHdyK6ICQ+O1Nf4zukFrJWHijFr+3HvwLLMCxWwjGCt0RifkYSlQ1J0NzblSf9VL2CtLyjBpC2FXoI1N3TA+mRkD4xIj/fkHuqyrF7AWvTdz3htz9nmC1asNQx7xvREcowV4eGBfYGsBql6Aevmd3Lwc7n7adSSfSzL3G1BPfLeJzkGG/94PcIMQLjZTMBSg+xrMXacLsXI9fleOtaz24K28z62Vzu8ODAVta/6CFgqUnUt1Jdny/HQR4dcBpZ2rCAFa83vr8fQjg2X3yZgqQ+WGPGXqywGrjqAK1VsgxPIgLU1qFKh+CXMnrG9kNKi6fYxBCxtwBKjsjwwelMBtp+4VHcSabDmbA2aVJgSa8PXY3rAZnLdJAKWdmDVRv781BWM3ngUDp6XnhRpEcES9P+ucEh6Alb/rqvkVFwClvZgiWdgeGDxtz/JgfWZ7sGaelsq5mS2l502TMDyD1i1Z5FOhbM/03UqfH3EdXj0piRFihGwFMmkWiF5sHSaCj95rAf6tYtULAQBS7FUqhQMOrDMJgO+Gd8bqS6e/KQUIWCpwoviIDJgbdFVHyvaYsL3E/sgzuL5uggELMVMqFJQGqxZ+gGrdbQF303oDVuY8gmt4noHJXYH7A4BneIjyCsdVZBRFiQowOqSGImdY3rArOAjhzKaw8ELldiYX4QNhy7gnw9ej+HpseRdoTIeVCslDdbMzQFPhbckx2DzozfB6AaqSlZAftFVbCm4hDW5P6OK4ZzitIw0Y2fWLWgdWTMKT1KhaswoCqRrsO7oGId1f7qxwRiVuALesUtV2H7iMlZ+/5PL5XyGXtcSqx7s3mDAlICliAfVCkmCFR5Ax7qvWxL++UBXZ0NFmPacLcULu06hUGaBiiX3dsVIF2NbBCzVmFEUSBqsGZ8GJBWaDAYsvb87jl6sxLbCIhwrll9Ox2AAto66BT3bRrlsOAFLEQ+qFdIlWJ62TlxQ7LtJfZFgc/+BBAHLU1V9Ky8NVnZgHMuTJvVuH4ONIzNgcTOroTYWAcsTVX0vqwAsXvnAke/X41GEGQM74Zn+KXWzRKUqE7A8ktbnwkEJltgH2zbmFmS0Ju8KfSZAowDSYD3z74B03qXaajObkDvtNsRZPXutQxxLI4LchA0qsGJtZuRM7Ycos7LF+Ou3mYClO7D00cdq28KCfZP6wiJ+y+XFQcDyQjQfqkg71tNiKgw8WJ0SIrD7iVvr9p9R0l5x3cz6jSNgKVFNvTK6B+umNtHYPraX7NLSIkgnS6rx4cEL6NkuGiOua/g5PQFLPWiURJIG66lPAupYPZJjnE9/7iY1iMszHfylHGtzz+P9Az852/vFE/3QPbHp+qEELCU4qFdGt2CJ868OTO8PV5tmifOrVv/4C+ZvL0DtTh8xljDsn9bf7dMiAUs9aJRE0iVY4oenhbMGIKJRR/0qw+Otveew+KtTDdqWHGPDt1P6SG7dRsBSgoN6ZaTBmr4pIKnw2yf7Iz3BWtfK/5UzWPzVaaz5sSbd1T/EdPnZmF4unY0MN6gHiqeRdAfW2L4peGl4Z+eC9btOXsbMzQX4qbTKZbvu7tYKK/94g+w3hWJl4lieouFbeWmwpvnXscJNBuyechu2H7uEF3ccAyOxeOrUAZ3w7J0dFUFFwPINEm9q6wospQ2YP6wLptyWrLS4sxxxLI/k8rmwJFjmaR8HpI8l1aoVD/fAfd0S3BYRU2h+UQVK7RwyU3/dEICA5TMrHgWQBmuqvsBaN6oXBqXFNmmg+JnXf8torPnxf3hr9xl0SrBh95R+ZM67RyioWzhowHIFlTja/s3ZMjz+fi5Kq2u2nE2Js2HftNua7IdDHEtdcOSiyYC1URep8O0Hb8JDGa0atOXoxSqM+SAXJ4p/3dMlPsKMvOw7XI5nEbDkUFD3d2mwngw8WNMHpTuf/mqPc6U0pmw4jG/PNNyUUVzToWD2ILRw8/k9AUtdcOSi6Rqsnskx+Hz8rc6px6dKqjHuo0PI+7nUZZsOZA9Ae4kNwAlYciio+7s0WFM2BDQVnl5wF2xmI2b+uwCrvz/ntuWbxvXB7akNF7NtXJiApS44ctF0DdakzE5Y/s0Z55qW7o5XfnM9sm5tJ9dOMo4lq5C6BXQNllxTR/dNwWv31nwtLXcQx5JTSN3fpcGaHNhUKNVUcVjhh2cy3c7Vql9XfDNks5hhIVueqEuPRDQZsNYHtI8lpcLJ+Xchxiq9NZy4UePSb84i0hqOKbd3IOtj+Q2rhtPCm5zWPEmfYP39kZ544IZEtzKV05wTqEX/OY7U+Aj8kJ0JC9lLx49YBSFYNyfHYMekvi5nNZRWOzBnSyHW5dTM2xI/bD0y907E20yk8+5XrGTBWqe7VHhs/hAnKPUPmhPw6s6T+NuXJxr8/75nBiAtoWb+O+m8+5cs6T7WRH2BNXVQOuYNTa9TyMEL+NcPP2PWJ4fq5r7X/jh5QBqeG965riwBi4DlUgHxlc1/Fw6FyUBBfPm8R9wvb+X3qGIcTcqLc+bPvTiMzG7wL0sNzibjWB/pJhXOHd4N0wZ0wJGiSmS99yNOSKzst2Vif/RJ+XUuFkmF/idMGqwn9APWR1l9sGTXCexr9PK5sWQL7u6GKXd0aKIkSYX+hUsSrDAdgaVEliHdWuGDUT2bFD1fTsNqCUf7eNfLSCqJrZcyetkTWk4PabAm6Mex5BqSFG3B4WcHNVi2+yrNYeKHeWAFQHxRTTYbl1NRvd9lwPpQN30suSYXLBiKxMiwmmICsP7geUxYmwNx0dtzL45AbISFgCUnooq/hwRYyx/piQczWjtlKbM7MPytvThWdNX57/dH34phXVuScSwPoeEEgOV4iJ/kebNWqDRY4/XvWB0SIvDDzIHOyYB7z5Tit8u+qRvTyuyciE3jejslJZ13abJYXsC2o8XYVVCELYfPo7Sq5hsC8WgbY8O9N7ZGZnoCbmrbAknRZlnYZMD6QPepcPPk29E3JQbPby3Em41G3k8tHF73otoVWOLXPSKQwXSo3Xm3szw2HPwF2RvzJD8QbqxR344JuOfGNujbMRZdEqMQ3mjVammwxukfrEPz7sITa3Ox99SvO6iLIkwckIaF9eZqiWCZzeE4XlyBDXkX0CrKgjF95CcI6g06tcASU92yr89gweZ8VZrYKTESEzLTMKBzAlLjrNKOFhYEYMXZzLhcz7ZrVTr/2j11KwBWMDzWHizG89trVqnZPK4XBqTFqSKov4P4Cpb41mL/uTI8/PdvUW5v+tZCrfbIONZa3adCV0JMHJDudCtxgt+y3aex4LMCcOFRSIgw49T8gRA31AzWwxewjhZV4LEV+3HmkvwWMr7qIw3W2OAE64c5g1FcQeOBpXshTvYTDEYMuTkVm7J6O59ygvnwBqxKhsefV32PLwsv+q3pIQnWwC6JDUQckdEOH4zpA5sl3G/CanUiT8E6d8WOfi/vdP6B+fMISbDqC5gcZ8OPcwZDoIyIj266Nqk/xVbjXJ6AdayoAv1e/UKN03ocQxqsrPeDso/VWAUxFXLhkejWOgqrHsnALSkxsuMwHivppwpKwbpYwaLrvK1+uqqmp2k2YI26owv+cv/1iLVde+0TMMl9O7ESsMSlnG58YQfOl1b7djIfakuDNSb4Heuh3ql4+YHuSIy2NZt3hcv3nMWcjXk+YOF7VRmw3gvaVBhpMWHvrMFoF2NxqtRcXumII+ltsz/1nQwfI4QsWKIu+5+9C2ktI5oVWAu3FuKNHYU+YuF7dWmwRgevY4nSiFvQnXhphHNjp+bgWGLfquW0T3ynQoUIkmCZRq8J2lRYq033NjH4asZA2MLNId/Hyv2pDHcuCszwQmMWpcF6PPjBEhuc2a0Ntky5PeQHSJ9en4eVe06r4De+h/h/rvAberp//eAAAAAASUVORK5CYII=';
