import React from 'react'
import { Card, Image, Divider } from 'antd'

import coverBg from '../../assets/images/cover-register-bg.jpg'
import RegisterForm from '../RegisterForm'

const Register = () => {
  const { Meta } = Card

  return (
    <div
      className="register-box"
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
        <Meta title="Registeration" />
        <Divider />
        <RegisterForm />
      </Card>
    </div>
  )
}

export default Register
