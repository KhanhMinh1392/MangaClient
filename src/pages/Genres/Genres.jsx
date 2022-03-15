import { Button, Col, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import BackUp from "../../component/BackUp/BackUp";
import ListGenres from "../../component/List/ListGenres/ListGenres";

const { Text, Link } = Typography;
export default function Genres() {
  const data = [
    {
      name: "Romance",
    },
    {
      name: "Teen",
    },
    {
      name: "Comedy",
    },
    {
      name: "Historical",
    },
  ];
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: 20 }}>
        <Col>
          <Space direction="vertical">
            <Text type="secondary">Genres</Text>
          </Space>
        </Col>
        <Col flex="auto">
          {data.map((item, index) => (
            <Space direction="vertical" key={index}>
              <Link
                target="_blank"
                style={
                  { marginRight: "20px" }
                }
              >
                {item.name}
              </Link>
            </Space>
          ))}
        </Col>
        <ListGenres/>
      </Row>
      <BackUp />
    </>
  );
}
