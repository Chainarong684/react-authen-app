import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-left">
        <span>
          Copyright ©2022 All rights reserved | Powered by Hennessy Stack
        </span>
      </div>
      <div className="footer-right">
        <ul className="footer-menu">
          <li>
            <Link className="link-tag" to="/">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link className="link-tag" to="/">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
