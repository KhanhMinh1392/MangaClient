import { AutoComplete, Col, Input, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SignInService from "../../pages/SignIn/SignInService";
import SignUpService from "../../pages/SignUp/SignUpService";
import SearchNavBar from "../Feature/SearchNavBar";
import { message_success } from "../Notification/Message";
import "./Navbar.css";

const { Search } = Input;
const { SubMenu } = Menu;
const Option = AutoComplete.Option;

function Navbar({ manga }) {
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [localStorage.getItem("token")]);

  const renderAccountDropDown = () => (
    <>
      <Menu.Item key="profile">
        <NavLink to="/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="logOut">
        <NavLink
          to="/"
          onClick={() => {
            // localStorage.removeItem("token");
            // localStorage.removeItem("id");
            localStorage.clear();
            setToken("");
            message_success("Log out success")
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
            <SearchNavBar manga={manga} />
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
                    key={1}
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
