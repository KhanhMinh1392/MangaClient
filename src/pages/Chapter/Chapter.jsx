import { LeftOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Row, Tooltip, Typography } from "antd";
import React from "react";
import "./Chapter.css";

export default function Chapter() {
  const dropDownItems = (
    <>
    </>
  );
  return (
    <Row justify={"center"} className="chapter">
      <Col span={23} sm={18} md={17} xl={14} xxl={12}>
        <Tooltip title="Previous Chap">
          <Button className="btn-prev">
            <LeftOutlined
              style={{
                fontSize: "22px",
                transition: "0.5s",
              }}
            />
          </Button>
          <Tooltip title="Chapter 1">
            <Dropdown
              className="dropdown-items"
              overlay={dropDownItems}
              trigger={["click"]}
            >
              <Typography.Text
                title=""
                onClick={(e) => e.preventDefault()}
                style={{
                  fontSize: "22px",
                  transition: "0.5s",
                }}
              >
                {/* {chapterName ? chapterName : chapterInfo.chapter_name} */}
                Chapter 1
              </Typography.Text>
            </Dropdown>
          </Tooltip>
        </Tooltip>
      </Col>
    </Row>
  );
}
