import React from "react";
import { List, Button , Tooltip , Typography } from "antd";
import "./ListChapter.css";

export default function ListChapter({chapter}) {

  return (
    <div className="list-comics">
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
        itemLayout={"horizontal"}
        dataSource={chapter}
        renderItem={(item) => (
          <List.Item>
            <Button style={{ width: '100%', overflow: "hidden" }} key={item._id}>
              <Tooltip placement="bottom" title={item.name_chapter}>
                <Typography.Text>{item.name_chapter}</Typography.Text>
              </Tooltip>
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}
