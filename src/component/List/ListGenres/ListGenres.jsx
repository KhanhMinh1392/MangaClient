import React from "react";
import { List, Card, Typography } from "antd";
import "./ListGenres.css";
export default function ListGenres({height}) {
  const data = [
    {
      id: 1,
      name: "Niên Tiên Sinh, Chầm Chậm Yêu Anh",
      image:
        "https://img.dtruyen.com/public/images/large/nientiensinhchamchamyeuanhsqdvk2FGqM.jpg",
    },
    {
      id: 2,
      name: "Vợ Nhỏ Hợp Đồng Của Tổng Giám Đốc",
      image:
        "https://img.dtruyen.com/public/images/large/vonhohopdongcuatonggiamdockCkgieBJCT.jpg",
    },
    {
      id: 3,
      name: "Y Kiến Chung Tình, Ông Xã Tôi Quá Lạnh Lùng",
      image:
        "https://img.dtruyen.com/public/images/medium/ykienchungtinhongxatoiqualanhlungX5fDWhFGDy.jpg",
    },
    {
      id: 4,
      name: "Trọng Sinh 80: Tức Phụ Có Điểm Cay",
      image:
        "https://img.dtruyen.com/public/images/medium/trongsinh80tucphucodiemcayZ8mu1Hs.jpg",
    },
    {
      id: 5,
      name: "Nhà Bảo Tàng Trấn Yêu",
      image:
        "https://img.dtruyen.com/public/images/medium/nhabaotangtranyeu4yJQBun.jpg",
    },
    {
      id: 6,
      name: "Tôi Trở Thành Mẹ Kế Của Cinderella",
      image:
        "http://i.truyenvua.com/ebook/190x247/toi-tro-thanh-me-ke-cua-cinderella_1617953634.jpg?r=r8645456",
    },
    {
      id: 7,
      name: "Võ Sĩ Quyền Anh",
      image:
        "http://i.truyenvua.com/ebook/190x247/vo-si_1593141783.jpg?r=r8645456",
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
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ minHeight: height ? height : '350px' }}
              size="small"
              hoverable
              cover={<img src={item.image} />}
            >
              <Typography style={{ textAlign: "center" }}>
                {item.name}
              </Typography>
            </Card>
          </List.Item>
        )}
        pagination={{onChange: ()=>{}, pageSize: 12, defaultCurrent: 1, total: 10}}
      />
    </div>
  );
}
