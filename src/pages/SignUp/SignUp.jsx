import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Modal, message } from "antd";
import React, { memo, useState } from "react";

function SignUp({ setShowSignUp }) {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCancel = () => {
    setIsModalVisible(false);
    setShowSignUp(false);
  };
  const handleSubmit = () => {
    // message.success('Register success')
    // setIsModalVisible(false);
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
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