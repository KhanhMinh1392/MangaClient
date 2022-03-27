import { AutoComplete, Avatar, Col, Image, Input, List, Menu, Row } from "antd";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SignInService from "../../pages/SignIn/SignInService";
import SignUp from "../../pages/SignUp/SignUp";
import SignUpService from "../../pages/SignUp/SignUpService";

const { Search } = Input;
const { SubMenu } = Menu;

function Navbar({ manga }) {
  const options = [
    {
      name: "Hello",
      value: "Burns Bay Road",
    },
    {
      name: "Hello",
      value: "Burns Bay Road",
    },
    {
      name: "Hello",
      value: "Burns Bay Road",
    },
    {
      name: "Hello",
      value: "Burns Bay Road",
    },
    {
      name: "Hello",
      value: "Burns Bay Road",
    },
    {
      name: "Hello",
      value: "Burns Bay Road",
    },
  ];
  const onSearch = (value) => console.log(value);
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [localStorage.getItem("token")]);

  const renderSearchManga = () => (
    <>
      <List
        itemLayout="horizontal"
        dataSource={manga}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={<a href="https://ant.design">{item.name_comic}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      ,
    </>
  );

  const renderAccountDropDown = () => (
    <>
      <Menu.Item key="profile"><NavLink to='/profile'>Profile</NavLink></Menu.Item>
      <Menu.Item key="logOut">
        <NavLink
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
            setToken("");
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
            <AutoComplete style={{ width: 300 }}
            children={renderSearchManga()}>
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
                    children={renderAccountDropDown()}
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
      {showSignUp ? <SignUpService setShowSignUp={setShowSignUp} /> : ""}
    </Row>
  );
}

export default Navbar;
