// Modules
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


export const HomePageTemplate = ({
  helmet,
  image,
  title,
  heading,
  description
}) => (
  <section className="section section--gradient">
    {helmet || ''}

    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #00cca3, -0.5rem 0 0 #00cca3',
                    backgroundColor: '#00cca3',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns is-centered">
                <div className="column is-10">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

HomePageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <HomePageTemplate
      helmet={(
        <Helmet>
          <title>Home | FrontEnd Library</title>
          <meta name="description" content="FrontEnd Library serve as a site that serve the tutorials and latest news about frontend prgroamming and technologies for not only front-end programmers, but anyone who wanted to learn front-end web development" />
          <meta name="keywords" content="FrontEnd Library, Front-end web development, Web developments, Web programming" />
        </Helmet>
      )}
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
    />
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        heading
        description
      }
    }
  }
`
