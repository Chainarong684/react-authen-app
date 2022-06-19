import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckOutlined,
  CloseOutlined,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
  Radio,
  Space,
} from 'antd'
import moment from 'moment'

const RegisterForm = () => {
  const initialRegisterData = {
    username: '',
    password: '',
    cpassword: '',
    email: '',
    dob: moment(),
    gender: 'male',
    role: 'user',
    notify: true,
  }

  const [registerData, setRegisterData] = useState(initialRegisterData)
  const [form] = Form.useForm()

  const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 14 },
  }

  const handleInputChange = (e: any) => {
    const { target } = e
    const { name, value } = target

    setRegisterData({
      ...registerData,
      [name]: value,
    })
  }

  const handleSubmitForm = () => {
    console.log(registerData)
  }

  const handleResetForm = () => {
    form.resetFields()
    setRegisterData(initialRegisterData)
  }

  return (
    <Form
      form={form}
      {...formItemLayout}
      name="registerForm"
      onFinish={handleSubmitForm}
      initialValues={{
        role: 'User',
        notify: true,
        dob: moment(),
        gender: 'male',
      }}
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
          name="username"
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        hasFeedback
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
          name="password"
          onChange={handleInputChange}
        />
      </Form.Item>
      <Form.Item
        name="cpassword"
        label="Re-Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            min: 6,
            message: 'Please fill confirm password',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Passwords that do not match!'))
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined style={{ color: '#808080' }} />}
          placeholder="Confirm Password"
          name="cpassword"
          onChange={handleInputChange}
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
          name="email"
          onChange={handleInputChange}
        />
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
          onChange={(e) => setRegisterData({ ...registerData, dob: e! })}
        />
      </Form.Item>
      <Form.Item name="gender" label="Gender">
        <Radio.Group name="gender" onChange={handleInputChange}>
          <Radio value={'male'}>Male</Radio>
          <Radio value={'female'}>Female</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="role" label="Role">
        <Select onChange={(e) => setRegisterData({ ...registerData, role: e })}>
          <Select.Option value="user">User</Select.Option>
          <Select.Option value="staff">Staff</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="notify" label="Notification" valuePropName="checked">
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
          onChange={(e) =>
            setRegisterData({
              ...registerData,
              notify: e,
            })
          }
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button danger htmlType="button" onClick={handleResetForm}>
          Reset
        </Button>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
          Submit
        </Button>
      </Form.Item>
      <Space direction="vertical">
        <Link to="/login">Already have an account ?</Link>
        <Link to="/new-password">Forgot password ?</Link>
      </Space>
    </Form>
  )
}

export default RegisterForm
