import React from 'react'
import { Link } from 'react-router-dom'
import { MailOutlined } from '@ant-design/icons'
import { Form, Input, Button, Space, DatePicker } from 'antd'

const NewPasswordForm = () => {
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
      name="newPasswordForm"
      onFinish={handleSubmitForm}
      autoComplete="off"
      scrollToFirstError
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please fill email' }]}
      >
        <Input
          prefix={<MailOutlined style={{ color: '#808080' }} />}
          placeholder="Email"
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
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
          Submit
        </Button>
      </Form.Item>
      <Space direction="vertical">
        <Link to="/register">Create new account</Link>
        <Link to="/login">Already have an account ?</Link>
      </Space>
    </Form>
  )
}

export default NewPasswordForm
