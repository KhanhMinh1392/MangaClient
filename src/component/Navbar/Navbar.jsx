import React, { useState } from "react";
import { Menu, Input} from "antd";
import { Row, Col } from "antd";

import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
const { Search } = Input;

function Navbar() {
  const onSearch = (value) => console.log(value);

  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <div className="container-fluid">
        <div className="header">
          <Col span={6}>
            <div className="logo">
              <i className="fas fa-bolt"></i>
              <NavLink to="/">Manga SMS</NavLink>
            </div>
          </Col>
          <Col span={6}>
            <Menu
              className="menu"
              mode="horizontal"
            >
              <Menu.Item key="home">
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="genres">
                <NavLink to="/genres">Genres</NavLink>
              </Menu.Item>
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
          <Col span={6} offset={4}>
            <Menu className="menu" mode="horizontal">
              <Menu.Item key="sign-in" onClick={(e) => setShow(true)}>Sign in</Menu.Item>
              <Menu.Item key="sign-up"onClick={(e) => setShowSignUp(true)}>
                Register
              </Menu.Item>
            </Menu>
          </Col>
        </div>
      </div>
      {show ? <SignIn setShow={setShow} /> : ""}
      {showSignUp ? <SignUp setShowSignUp={setShowSignUp} /> : ""}
    </Row>
  );
}

export default Navbar;
