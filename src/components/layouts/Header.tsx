import React from 'react'
import { Link } from 'react-router-dom'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Avatar } from 'antd'

import './Header.css'

const Header = () => {
  const dropDownOption = (
    <Menu
      items={[
        {
          key: 1,
          label: 'Profile',
          icon: <UserOutlined />,
        },
        {
          key: 2,
          label: 'Logut',
          icon: <LogoutOutlined />,
        },
      ]}
    />
  )

  return (
    <div className="header-box">
      <div className="logo-box">
        <span>Authentication App</span>
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
            <Dropdown overlay={dropDownOption}>
              <Avatar style={{ color: '#fff' }} icon={<UserOutlined />} />
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
