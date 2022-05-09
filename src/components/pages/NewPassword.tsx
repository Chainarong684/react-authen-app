import { Card, Divider, Image } from 'antd'
import React from 'react'

import coverBg from '../../assets/images/cover-password-bg.jpg'
import NewPasswordForm from '../NewPasswordForm'

const NewPassword = () => {
  const { Meta } = Card
  return (
    <div
      className="new-password-box"
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
        <Meta title="Reset Password" />
        <Divider />
        <NewPasswordForm />
      </Card>
    </div>
  )
}

export default NewPassword
