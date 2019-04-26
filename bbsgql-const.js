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
                allReplies(skip: $skip, first: $first) {
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
            allComments(skip: $skip, first: $first) {
              comments {
                allReplies(skip: $skip, first: $first) {
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
            allComments(skip: $skip, first: $first) {
              comments {
                allReplies(skip: $skip, first: $first) {
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
  query Latests($skip: Long, $first: Long) {
    latests {
      ... on Latests {
        latests {
          ... on LearningResourceInfo {
            allComments(skip: $skip, first: $first) {
              comments {
                allReplies(skip: $skip, first: $first) {
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
            allComments(skip: $skip, first: $first) {
              comments {
                allReplies(skip: $skip, first: $first) {
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
            allComments(skip: $skip, first: $first) {
              comments {
                allReplies(skip: $skip, first: $first) {
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
                allReplies(skip: $skip, first: $first) {
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
            allComments(skip: $skip, first: $first) {
              comments {
                allReplies(skip: $skip, first: $first) {
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
  query AllSchoolHeats($skip: Long, $first: Long, $sortedBy: SortedBy) {
    allSchoolHeats(skip: $skip, first: $first, sortedBy: $sortedBy) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query SchoolHeatInfo($id: ID!, $skip: Long, $first: Long) {
    schoolHeatInfo(id: $id) {
      ... on SchoolHeatInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            allReplies(skip: $skip, first: $first) {
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
  query SchoolHeatsOfAuthor($authorId: ID!, $skip: Long, $first: Long) {
    schoolHeatsOfAuthor(authorId: $authorId, skip: $skip, first: $first) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query SearchSchoolHeats($title: String!, $skip: Long, $first: Long) {
    searchSchoolHeats(title: $title) {
      ... on MultiSchoolHeats {
        schoolHeats {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query AllEntertainments($skip: Long, $first: Long, $sortedBy: SortedBy) {
    allEntertainments(skip: $skip, first: $first, sortedBy: $sortedBy) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query EntertainmentInfo($id: ID!, $skip: Long, $first: Long) {
    entertainmentInfo(id: $id) {
      ... on EntertainmentInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            allReplies(skip: $skip, first: $first) {
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
  query EntertainmentsOfAuthor($authorId: ID!, $skip: Long, $first: Long) {
    entertainmentsOfAuthor(authorId: $authorId, skip: $skip, first: $first) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query SearchEntertainments($title: String!, $skip: Long, $first: Long) {
    searchEntertainments(title: $title) {
      ... on MultiEntertainments {
        Entertainments {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query AllLearningResource($skip: Long, $first: Long, $course: String, $sortedBy: SortedBy) {
    allLearningResource(skip: $skip, first: $first, course: $course, sortedBy: $sortedBy) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query LearningResourceInfo($id: ID!, $skip: Long, $first: Long) {
    learningResourceInfo(id: $id) {
      ... on LearningResourceInfo {
        allComments(skip: $skip, first: $first) {
          comments {
            allReplies(skip: $skip, first: $first) {
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
  query LearningResourcesOfAuthor($authorId: ID!, $skip: Long, $first: Long) {
    learningResourcesOfAuthor(authorId: $authorId, skip: $skip, first: $first) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
  query SearchLearningResources($title: String!, $skip: Long, $first: Long) {
    searchLearningResources(title: $title) {
      ... on MultiLearningResources {
        learningResources {
          allComments(skip: $skip, first: $first) {
            comments {
              allReplies(skip: $skip, first: $first) {
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
            allReplies(skip: $skip, first: $first) {
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
  mutation CreateSchoolHeatComment($schoolHeatCommentInput: SchoolHeatCommentInput!, $skip: Long, $first: Long) {
    createSchoolHeatComment(schoolHeatCommentInput: $schoolHeatCommentInput) {
      ... on CommentInfo {
        allReplies(skip: $skip, first: $first) {
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
            allReplies(skip: $skip, first: $first) {
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
  mutation CreateEntertainmentComment($entertainmentCommentInput: EntertainmentCommentInput!, $skip: Long, $first: Long) {
    createEntertainmentComment(entertainmentCommentInput: $entertainmentCommentInput) {
      ... on CommentInfo {
        allReplies(skip: $skip, first: $first) {
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
            allReplies(skip: $skip, first: $first) {
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
  mutation CreateLearningResourceComment($learningResourceCommentInput: LearningResourceCommentInput!, $skip: Long, $first: Long) {
    createLearningResourceComment(learningResourceCommentInput: $learningResourceCommentInput) {
      ... on CommentInfo {
        allReplies(skip: $skip, first: $first) {
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
  mutation EditLecture($id: ID!, $lectureInput: LectureInput!) {
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
