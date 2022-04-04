import React from 'react'
import { Space, Table } from "antd";
export default function GenresTable({genres}) {
    const columns = [
        {
          title: "Name Genres",
          dataIndex: "name_cate",
          key: "name_cate",
        },
        {
          title: "Color",
          dataIndex: "color",
          key: "color",
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
          dataSource={genres}
          rowKey={row=>row._id}
          pagination={{
            pageSize: 6,
            defaultCurrent: 1,
            total: genres.length,
          }}
        />
        </>
      )
}
