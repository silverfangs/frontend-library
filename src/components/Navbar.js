import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent fel-navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item fel-navbar__logo">
          FrontEnd Library
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
