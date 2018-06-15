import React from 'react'
import Link from 'gatsby-link'

// Modules
import fontawesome from '@fortawesome/fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

fontawesome.library.add(faHeart)

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Built with <span className="icon has-text-danger"><i className="fas fa-heart"></i></span> from <a target="_blank" href="https://github.com/silverfangs">Silverfangs</a>
          <br/>
          &copy; {currentYear} frontend-library.com
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
