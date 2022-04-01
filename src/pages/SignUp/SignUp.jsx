import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Modal, message } from "antd";
import React, { memo, useState } from "react";

function SignUp({ setShowSignUp , handleSignUp }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowSignUp(false);
  };
  const handleSubmit = () => {
    handleSignUp(username,email,phone,password);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="MangaSMS Sign Up"
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={false}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input value={email} onChange={(e)=> setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input value={phone} onChange={(e)=> setPhone(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            icon={<LoginOutlined />}
            htmlType="submit"
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            danger
            style={{ marginLeft: "10px" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default memo(SignUp);
