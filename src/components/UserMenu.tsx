import React from 'react'
import { Link } from 'react-router-dom'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd'

const UserMenu = () => {
  const { Text } = Typography

  const dropDownOption = (
    <Menu
      items={[
        {
          key: 1,
          label: <Link to={`/user/123`}>Profile</Link>,
          icon: <UserOutlined />,
        },
        {
          key: 2,
          label: 'Logut',
          icon: <LogoutOutlined />,
          danger: true,
        },
      ]}
      onClick={(e) => {
        console.log(e.key)
      }}
    />
  )

  return (
    <Dropdown overlay={dropDownOption} placement="bottomRight" arrow>
      <Link to={'#'}>
        <Space>
          <Avatar style={{ color: '#fff' }} icon={<UserOutlined />} />
          <Text style={{ color: '#fff' }}>Guest</Text>
        </Space>
      </Link>
    </Dropdown>
  )
}

export default UserMenu
