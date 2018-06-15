// Modules
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Stylesheet
import './styles/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | FrontEnd Library" />
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
