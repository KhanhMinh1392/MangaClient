import React from "react";
import { List, Button, Tooltip, Typography, Row, Col } from "antd";
import "./ListChapter.css";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";

export default function ListChapter({ chapter , manga }) {
  return (
    <div className="list-comics">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <List
          grid={{
            gutter: 14,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 1,
            xxl: 3,
          }}
          className="list-item"
          itemLayout={"horizontal"}
          dataSource={chapter}
          renderItem={(item) => (
            <Col className="gutter-row" span={12}>
              <List.Item>
                <NavLink to={`/manga/${manga._id}/${item._id}`}>
                  <Button className="" style={{ minWidth: "100%" }} key={item._id}>
                    <Tooltip placement="bottom" title={item.name_chapter}>
                      <Typography.Text
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>{item.name_chapter}</div>
                        <div>{dayjs(item.createdAt).format("DD-MM-YYYY")}</div>
                      </Typography.Text>
                    </Tooltip>
                  </Button>
                </NavLink>
              </List.Item>
            </Col>
          )}
          pagination={{
            pageSize: 12,
            defaultCurrent: 1,
            total: chapter.length,
          }}
        />
      </Row>
    </div>
  );
}
