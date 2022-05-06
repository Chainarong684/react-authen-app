import React from 'react'
import { Link } from 'react-router-dom'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, Select, DatePicker } from 'antd'

const RegisterForm = () => {
  const [form] = Form.useForm()

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
  }

  const handleSubmitForm = (value: any) => {
    console.log(value)
  }

  const onResetForm = () => {
    form.resetFields()
  }

  return (
    <Form
      form={form}
      {...formItemLayout}
      name="registerForm"
      onFinish={handleSubmitForm}
      initialValues={{ gender: 'Male' }}
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
        <Input
          prefix={<LockOutlined style={{ color: '#808080' }} />}
          placeholder="Password"
          type="password"
        />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please fill emaill' }]}
      >
        <Input
          prefix={<MailOutlined style={{ color: '#808080' }} />}
          placeholder="Example@test.com"
          type="email"
        />
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <Select>
          <Select.Option value="Male">Male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="dob"
        label="Date of birth"
        rules={[{ required: true, message: 'Please fill Date of birth' }]}
      >
        <DatePicker
          format={'DD/MM/YYYY'}
          placeholder="Date of birth"
          style={{ width: '100%' }}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button danger htmlType="button" onClick={onResetForm}>
          Reset
        </Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
          Submit
        </Button>
      </Form.Item>
      <Link to="/login">Already have an account ?</Link>
    </Form>
  )
}

export default RegisterForm