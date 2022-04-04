import { Tabs, Typography } from "antd";
import dayjs from "dayjs";
import React from "react";
import ListInfinite from "../../component/List/ListInfinite/ListInfinite";
import GenresTableService from "../../component/Table/GenresTable/GenresTableService";
import MangaTableService from "../../component/Table/MangaTable/MangaTableService";
import UserTableService from "../../component/Table/UserTable/UserTableService";
import "./Profile.css";

const { Title } = Typography;

const { TabPane } = Tabs;

export default function Profile({ info }) {
  return (
    <div className="profile">
      <Title level={2}>Account Information</Title>
      <Tabs tabPosition={"left"}>
        <TabPane tab="Profile" key="1">
          <Title level={4}>Account name: {info.name} </Title>
          <Title level={5}>UserID: {info._id} </Title>
          <Title level={5}>Role: {info.role} </Title>
          <Title level={5}>
            CreatedAt: {dayjs(info.createdAt).format("DD/MM/YYYY")}{" "}
          </Title>
        </TabPane>

        {info.role === "Admin" ? (
          <TabPane tab="Manager" key="4">
            <Tabs defaultActiveKey="1">
              <TabPane tab="List Manga" key="1">
                <MangaTableService />
              </TabPane>
              <TabPane tab="List Genres" key="2">
                <GenresTableService />
              </TabPane>
              <TabPane tab="List User" key="3">
                <UserTableService />
              </TabPane>
            </Tabs>
          </TabPane>
        ) : (
          <>
            <TabPane tab="Library" key="2">
              Content of Tab 3
            </TabPane>
            <TabPane tab="History" key="3">
              <ListInfinite />
            </TabPane>
          </>
        )}
      </Tabs>
    </div>
  );
}
