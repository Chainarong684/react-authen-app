import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, Space, Checkbox } from 'antd'

const LoginForm = () => {
  const [form] = Form.useForm()

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
  }

  const handleSubmitForm = (value: any) => {
    console.log(value)
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
          prefix={<UserOutlined style={{ color: '#808080' }} />}
          placeholder="Username"
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
          prefix={<LockOutlined style={{ color: '#808080' }} />}
          placeholder="Password"
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
