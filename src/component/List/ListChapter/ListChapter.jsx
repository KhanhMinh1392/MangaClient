import React from "react";
import { List, Button , Tooltip , Typography } from "antd";
import "./ListChapter.css";

export default function ListChapter() {
  const chapters = [
    {
      name: "Character Profile",
    },
    {
      name: "W-W-W-What Are You Doing?!",
    },
    {
      name: "Stay Away From Him, He's Gay!",
    },
    {
      name: "I'm Having a Hard-On!",
    },
    {
      name: "The Joy Of Being Alone",
    },
    {
      name: "Negotiations",
    },
    {
      name: "It's Better If I Leave",
    },
  ];
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
        dataSource={chapters}
        renderItem={(item) => (
          <List.Item>
            <Button style={{ width: 150, overflow: "hidden" }}>
              <Tooltip placement="bottom" title={item.name}>
                <Typography.Text>{item.name}</Typography.Text>
              </Tooltip>
            </Button>
          </List.Item>
        )}
      />
    </div>
  );
}
