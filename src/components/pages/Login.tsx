import { Card, Divider, Image } from 'antd'
import React from 'react'

import coverBg from '../../assets/images/cover-login-bg.jpg'
import LoginForm from '../LoginForm'

const Login = () => {
  const { Meta } = Card
  return (
    <div
      className="login-box"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px 0',
      }}
    >
      <Card
        style={{ width: 400 }}
        bordered
        cover={
          <Image
            style={{ height: 200, objectFit: 'cover' }}
            preview={false}
            src={coverBg}
          />
        }
      >
        <Meta title="Login" />
        <Divider />
        <LoginForm />
      </Card>
    </div>
  )
}

export default Login
