import React from "react";
import { Menu, Input, Modal, Button } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
const { SubMenu } = Menu;
const { Search } = Input;

export default function AppHeader() {
  const onSearch = (value) => console.log(value);

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  return (
    <Router>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="#">Manga SMS</a>
          </div>
          <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">Home</Menu.Item>
            <SubMenu key="Submenu" title="Genres">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
          <Search
            className="search"
            placeholder="Search..."
            onSearch={onSearch}
            enterButton
          />
          <Menu mode="horizontal">
            <Button type="primary" onClick={showModal}>
              Login
            </Button>
            <Modal
              title="Login"
              visible={visible}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
              footer={null}
            >
              <SignIn />
            </Modal>
          </Menu>
        </div>
      </div>
    </Router>
  );
}
