import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, Space, Checkbox } from 'antd'

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })

  const [form] = Form.useForm()

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
  }

  const handleInputChange = (e: any) => {
    const { target } = e
    const { name, value } = target

    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const handleSubmitForm = () => {
    console.log(loginData)
  }

  return (
    <Form
      form={form}
      {...formItemLayout}
      name="loginForm"
      onFinish={handleSubmitForm}
      autoComplete="off"
      scrollToFirstError
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please fill username' }]}
      >
        <Input
          placeholder="Username"
          name="username"
          prefix={<UserOutlined style={{ color: '#808080' }} />}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            min: 6,
            message: 'Please fill password',
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
          name="password"
          prefix={<LockOutlined style={{ color: '#808080' }} />}
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
          Login
        </Button>
      </Form.Item>
      <Space direction="vertical">
        <Link to="/register">Create new account</Link>
        <Link to="/new-password">Forgot password ?</Link>
      </Space>
    </Form>
  )
}

export default LoginForm
