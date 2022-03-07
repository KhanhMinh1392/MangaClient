import React, { useState } from 'react'
import { Menu, Input, Modal, Button } from "antd";
import { Row, Col } from "antd";

import SignIn from "../../pages/SignIn/SignIn";
import { NavLink } from 'react-router-dom';

const { SubMenu } = Menu;
const { Search } = Input;

function Navbar() {
    const onSearch = (value) => console.log(value);
    
    const [ show , setShow] = useState(false);

  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <div className="container-fluid">
          <div className="header">
            <Col span={6}>
              <div className="logo">
                <i className="fas fa-bolt"></i>
                <a href="#">Manga SMS</a>
              </div>
            </Col>
            <Col span={6}>
              <Menu
                className="menu"
                mode="horizontal"
                defaultSelectedKeys={["home"]}
              >
                <Menu.Item key="home"><NavLink to="/">Home</NavLink></Menu.Item>
                <SubMenu key="Submenu" title="Genres">
                  <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1"><NavLink to="/genres">Option 1</NavLink></Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>
            </Col>
            <Col span={6}>
              <Search
                className="search"
                placeholder="Search..."
                onSearch={onSearch}
                enterButton
              />
            </Col>
            <Col span={6} offset={6} >
              <Button type="primary" onClick={(e) => setShow(true)}> Sign in</Button>
            </Col>
          </div>
        </div>
        {show ? <SignIn setShow={setShow} /> : ""}
      </Row>
  )
}

export default Navbar