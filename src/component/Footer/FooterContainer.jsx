import React from "react";
import { Col, Row, Typography } from "antd";
import "./FooterContainer.css";
import { Footer } from "antd/lib/layout/layout";

export default function FooterContainer() {
  return (
    <Footer className="footer">
      <div span={24} className="footer-bg"></div>
      <Row justify={"center"} className="footer-row">
        <Col span={24} className="col01">
          <div className="footer-logo">
          
          </div>
          <div className="footer-text">
            <Typography.Text>Copyright © 2021 MangaCrawlers</Typography.Text>

            <Typography.Text style={{ display: "block" }}>
              Copyrights and trademarks for the manga, and other promotional
              materials are held by their respective owners and their use is
              allowed under the fair use clause of the Copyright Law. © 2021
              MangaCrawlers. <br />
              Our Email: mangacrawlers123@gmail.com
            </Typography.Text>
          </div>
        </Col>
      </Row>
    </Footer>
  );
}
