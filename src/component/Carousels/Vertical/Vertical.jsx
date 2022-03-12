import React from "react";
import Slider from "react-slick";
import { Card, Typography, Image, Col, Row, Tooltip } from "antd";
import "./Vertical.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Meta } = Card;

export default function Vertical() {
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
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    dots: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        {data.map((items, index) => (
          <Row gutter={8} key={index}>
            <Col span={8}>
              <Card
                hoverable
                
                style={{ width: 240 , height: 100 }}
                cover={<Image src={items.image} />}
              >
                <Meta
                 title={ 
                 <Tooltip placement="bottom" title={items.name}>
                    <Typography.Text>{items.name}</Typography.Text>
                 </Tooltip>
                 } description="Chương 11" />
              </Card>
            </Col>
          </Row>
        ))}
      </Slider>
    </div>
  );
}
