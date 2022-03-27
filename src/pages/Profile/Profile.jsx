import React from "react";
import "./Profile.css";
import { Tabs, Typography } from "antd";
import ListInfinite from "../../component/List/ListInfinite/ListInfinite";

const { Title } = Typography;

const { TabPane } = Tabs;

export default function Profile() {
  return (
    <div className="profile">
      <Title level={2}>Information</Title>
      <Tabs tabPosition={"left"}>
        <TabPane tab="Profile" key="1">
          <Title level={4}>Account name: </Title>
          <Title level={5}>UserId: </Title>
          <Title level={5}>Role: </Title>
          <Title level={5}>Phone: </Title>
        </TabPane>
        <TabPane tab="History" key="2">
          <ListInfinite />
        </TabPane>
        <TabPane tab="Library" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs>
    </div>
  );
}
