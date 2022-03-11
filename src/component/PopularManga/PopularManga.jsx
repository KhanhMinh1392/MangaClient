import React, { useState, useEffect } from "react";
import { List, message, Avatar, Skeleton, Divider, Button, Image } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PopularManga() {
  const data = [
    {
      id: 1,
      title: "[Thập Niên 70] Mẹ Kế Đoàn Sủng Tiểu Nhãi Con",
      img: "https://img.dtruyen.com/public/images/news/toptruyenxuyenkhongvVFcC.jpg",
    },
    {
      id: 2,
      title: "Cô Vợ Tình Nhân Của Tổng Giám Đốc",
      img: "https://img.dtruyen.com/public/images/news/toptruyentienhiepS9Twc.jpg",
    },
    {
      id: 3,
      title: "Yêu Em Sâu Tận Sao Trời Kia",
      img: "https://img.dtruyen.com/public/images/news/toptruyenxuyenkhongvVFcC.jpg",
    },
    {
      id: 4,
      title: "Vợ Yêu Khó Chiều: Tổng Tài Sủng Vợ Ngọt Ngào",
      img: "https://img.dtruyen.com/public/images/news/toptruyensinhtonhay3m4eA.jpg",
    },
    {
      id: 5,
      title: "Vợ Yêu Khó Chiều: Tổng Tài Sủng Vợ Ngọt Ngào",
      img: "https://img.dtruyen.com/public/images/news/toptruyensinhtonhay3m4eA.jpg",
    },
  ];
  //   const [loading, setLoading] = useState(false);
  //   const [data, setData] = useState([]);

  //   const loadMoreData = () => {
  //     if (loading) {
  //       return;
  //     }
  //     setLoading(true);
  //     fetch(
  //       "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
  //     )
  //       .then((res) => res.json())
  //       .then((body) => {
  //         setData([...data, ...body.results]);
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   };

  //   useEffect(() => {
  //     loadMoreData();
  //   }, []);
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      bordered
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Image preview={false} style={{ width: 80 }} src={item.img} />
            }
            title={<a href="#">{item.title}</a>}
          />
        </List.Item>
      )}
    />
  );
}
