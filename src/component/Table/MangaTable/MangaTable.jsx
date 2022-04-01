import { Image, Space, Table } from "antd";
import React from "react";
import './MangaTable.css'
export default function MangaTable({ manga }) {
  const columns = [
    {
      title: "Thumbnail",
      dataIndex: "image",
      key: "image",
      render: (img) => (
        <Image
          className="image-thumb-admin"
          style={{ width: "50px", borderRadius: "2px" }}
          src={img}
          alt={img}
        />
      ),
    },
    {
      title: "Manga",
      dataIndex: "name_comic",
      key: "name_comic",
    },
    {
      title: "Author",
      dataIndex: "name_author",
      key: "name_author",
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <Table
      key={1}
      columns={columns}
      dataSource={manga}
      rowKey={row=>row._id}
      pagination={{
        pageSize: 6,
        defaultCurrent: 1,
        total: manga.length,
      }}
    />
  );
}
