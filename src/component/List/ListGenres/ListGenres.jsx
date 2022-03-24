import { Card, List, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./ListGenres.css";
export default function ListGenres({ width, height, manga }) {
  return (
    <div className="list-comics">
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        pagination={{ pageSize: 12, defaultCurrent: 1, total: manga.length }}
        dataSource={manga}
        renderItem={(item) => (
          <List.Item>
            <NavLink title={item.name_comic} to={`/manga/${item._id}`}>
              <Card
                style={{
                  minHeight: height ? height : "320px",
                  minWidth: width ? width : "130px",
                }}
                size="small"
                hoverable
                cover={<img src={item.image} />}
              >
                <Typography style={{ textAlign: "center" }}>
                  {item.name_comic}
                </Typography>
              </Card>
            </NavLink>
          </List.Item>
        )}
      />
    </div>
  );
}
