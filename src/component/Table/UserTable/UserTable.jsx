import { Space, Table } from "antd";
import React from 'react';
export default function UserTable({users}) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
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
    <>
    <Table
      key={1}
      columns={columns}
      dataSource={users}
      rowKey={row=>row._id}
      pagination={{
        pageSize: 6,
        defaultCurrent: 1,
        total: users.length,
      }}
    />
    </>
  )
}
