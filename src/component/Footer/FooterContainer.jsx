import React from "react";
import { Col, Row, Typography, Avatar } from "antd";
import "./FooterContainer.css";
import { NavLink } from "react-router-dom";
export default function FooterContainer() {
  const socials = [
    {
      name: 'facebook',
      img: 'https://www.facebook.com/images/fb_icon_325x325.png'
    },
    {
      name: 'instagram',
      img: 'https://cdn.tgdd.vn/2020/03/GameApp/Instagram-200x200.jpg'
    },
    {
      name: 'twitch',
      img: 'https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg'
    },
    {
      name: 'discord',
      img: 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ'
    },
  ]
  return (
    <>
      <div span={24} className="footer-bg">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
          <Col className="gutter-row" span={6}>
            <div className="footer-logo">
              <i className="fas fa-bolt"></i>
              <NavLink to="/">Manga SMS</NavLink>
            </div>
          </Col>
          <Col className="gutter-row" span={6} >
            <Typography.Text
              style={{
                color: "white",
                marginRight: "10px",
                borderRight: "1px solid white",
                paddingRight: "10px",
              }}
            >
              TERM
            </Typography.Text>
            <Typography.Text
              style={{
                color: "white",
                marginRight: "10px",
                borderRight: "1px solid white",
                paddingRight: "10px",
              }}
            >
              PRIVACY
            </Typography.Text>
            <Typography.Text
              style={{
                color: "white",
                marginRight: "10px",
                borderRight: "1px solid white",
                paddingRight: "10px",
              }}
            >
              CCPA
            </Typography.Text>
            <Typography.Text style={{ color: "white" }}>EEA</Typography.Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <Typography.Text style={{ display: "block", color: "white" }}>
              BILIBILI COMICS all rights reserved. Bilibili Comics Pte. Ltd. 11
              COLLYER QUAY #17-00 THE ARCADE SINGAPORE (049317)
            </Typography.Text>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="icon-social">
              {
                socials.map((item, i) => (
                  <Avatar
                  key={i}
                  size={{ xxl: 22 }}
                  src={item.img}
                  
                />
                ))
              }
            </div>
            <Typography.Text style={{ display: "block", color: "white" }}>
              Copyright © 2022 BiLiBiLi Comics <br />
              Our Email: mangasms@gmail.com
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </>
  );
}
