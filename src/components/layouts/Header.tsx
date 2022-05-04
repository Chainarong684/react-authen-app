import React from 'react'
import { Link } from 'react-router-dom'

import UserMenu from '../UserMenu'

import './Header.css'

const Header = () => {
  return (
    <div className="header-box">
      <div className="logo-box">
        <span>Management System</span>
      </div>
      <div className="nav-box">
        <ul className="nav-menu">
          <li>
            <Link className="link-tag" to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link-tag" to={'/login'}>
              Login
            </Link>
          </li>
          <li>
            <Link className="link-tag" to={'/register'}>
              Register
            </Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
