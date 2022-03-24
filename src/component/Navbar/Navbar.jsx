import { AutoComplete, Col, Input, Menu, Row } from "antd";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SignInService from "../../pages/SignIn/SignInService";
import SignUp from "../../pages/SignUp/SignUp";

const { Search } = Input;
const { SubMenu } = Menu;

function Navbar() {
  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];

  const onSearch = (value) => console.log(value);
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [localStorage.getItem("token")]);

  const RenderAccountDropDown = () => (
    <>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="history">History</Menu.Item>
      <Menu.Item key="logOut">
        <NavLink
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
            setToken('');
          }}
        >
          Log out
        </NavLink>
      </Menu.Item>
    </>
  );

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
            <Menu className="menu" mode="horizontal">
              <Menu.Item key="home">
                <NavLink to="/">Home</NavLink>
              </Menu.Item>
              <Menu.Item key="genres">
                <NavLink to="/genres">Genres</NavLink>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={6}>
            <AutoComplete
            style={{ width: 300 }}
            options={options}
            >
              <Search
                className="search"
                placeholder="Search..."
                onSearch={onSearch}
                enterButton
              />
            </AutoComplete>
          </Col>
          <Col span={6} offset={3}>
            {token ? (
              <>
                <Menu
                  mode="horizontal"
                  className="menu-left"
                  style={{ background: "transparent" }}
                >
                  <SubMenu
                    title="Account"
                    popupClassName="list-cccount-dropdown"
                    children={RenderAccountDropDown()}
                  />
                </Menu>
              </>
            ) : (
              <>
                <Menu className="menu" mode="horizontal">
                  <Menu.Item key="sign-in" onClick={() => setShow(true)}>
                    Sign in
                  </Menu.Item>
                  <Menu.Item key="sign-up" onClick={() => setShowSignUp(true)}>
                    Register
                  </Menu.Item>
                </Menu>
              </>
            )}
          </Col>
        </div>
      </div>
      {show ? <SignInService setShow={setShow} /> : ""}
      {showSignUp ? <SignUp setShowSignUp={setShowSignUp} /> : ""}
    </Row>
  );
}

export default Navbar;
