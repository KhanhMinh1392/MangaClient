import { HomeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Row, Tooltip, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Chapter.css";
import ImgChapter from "./ImgChapter";

export default function Chapter() {
  const dropDownItems = <></>;
  return (
    <Row justify={"center"} className="chapter">
      <Col
        span={23}
        sm={18}
        md={17}
        xl={14}
        xxl={12}
        style={{ textAlign: "center" }}
        className="name-chapter"
      >
        <Tooltip title="Go back to manga page">
          <Button className="btn-home">
            <NavLink to="/manga">
              <HomeOutlined
                style={{
                  fontSize: "22px",
                  transition: "0.5s",
                }}
              />
            </NavLink>
          </Button>
        </Tooltip>
        <Tooltip title="Previous Chap">
          <Button className="btn-prev">
            <LeftOutlined
              style={{
                fontSize: "22px",
                transition: "0.5s",
              }}
            />
          </Button>
        </Tooltip>
        <Tooltip title="Chapter 1" placement="bottom">
          <Dropdown
            className="dropdown-items"
            overlay={dropDownItems}
            trigger={["click"]}
          >
            <Typography.Text
              className="text-chapter"
              title=""
              onClick={(e) => e.preventDefault()}
              style={{
                fontSize: "22px",
                transition: "0.5s",
                margin: "0 100px"
              }}
            >
              {/* {chapterName ? chapterName : chapterInfo.chapter_name} */}
              One Piece Chap 1008
            </Typography.Text>
          </Dropdown>
        </Tooltip>
        <Tooltip title="Next Chap">
          <Button className="btn-next">
            <RightOutlined
              style={{
                fontSize: "22px",
                transition: "0.5s",
              }}
            />
          </Button>
        </Tooltip>
      </Col>
      <ImgChapter />
    </Row>
  );
}
