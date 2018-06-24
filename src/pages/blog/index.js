import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h1 className="has-text-weight-bold is-size-4">Blog posts</h1>
              </div>
              {posts
                .map(({ node: post }) => (
                  <div
                    className="content fel-blog-post"
                    style={{ padding: '2em 4em' }}
                    key={post.id}
                  >
                    <p>
                      <Link className="has-text-primary fel-blog-post__title" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <span> &bull; </span>
                      <small>{post.frontmatter.date}</small>
                    </p>
                    <Link className="fel-blog-post__img" to={post.fields.slug}>
                      <img src={post.frontmatter.image} />
                    </Link>
                    <p>
                      {post.excerpt}
                      <br />
                      <br />
                      <Link className="button is-small" to={post.fields.slug}>
                        Keep Reading →
                      </Link>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" },
          publishState: { eq: "Publish" }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            postImage
          }
        }
      }
    }
  }
`