import { Image, List, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import "./ListHorizon.css";

export default function ListHorizon({ library, deleteLibrary }) {
  const data= library[0].comic;
  const handelDeleteLibrary = (id) => {
    deleteLibrary(library[0]._id,id)
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <NavLink to={`/manga/${item._id}`} >Read</NavLink>,
            <a key="list-loadmore-more" onClick={() => handelDeleteLibrary(item._id)}>Delete</a>,
          ]}
        >
          <div className="list">
            <div>
              <Image src={item.image} className="list-img" />
            </div>
            <div className="content">
              <Typography.Title level={5}>{item.name_comic}</Typography.Title>
              <h5>Author: {item.name_author}</h5>
            </div>
          </div>
        </List.Item>
      )}
      pagination={{ pageSize: 5, defaultCurrent: 1, total: library.length }}
    />
  );
}
