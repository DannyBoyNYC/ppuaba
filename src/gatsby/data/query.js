module.exports.data = {
  posts: `{
    allContentfulPost(sort: { fields: [ordering], order: DESC }) {
      edges {
        node {
          slug
          publishDate
        }
      }
    }
  }`,
  pages: `{
    allContentfulPage {
      edges {
        node {
          slug
        }
      }
    }
  }`,
  tags: `{
    allContentfulTag {
      edges {
        node {
          slug
          post {
            id
          }
        }
      }
    }
  }`,
}
