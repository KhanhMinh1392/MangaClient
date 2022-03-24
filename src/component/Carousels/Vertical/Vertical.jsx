import React, { useState } from "react";
import Slider from "react-slick";
import { Card, Typography, Image, Col, Row, Tooltip } from "antd";
import "./Vertical.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

export default function Vertical({manga}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    dots: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {manga.map((items, index) => (
          <Row gutter={8} key={index}>
            <Col span={8}>
              <Card
                hoverable
                style={{ width: 240, height: 100 }}
                cover={<Image src={items.image} height={260}/>}
              >
                <NavLink to={`/manga/${items._id}`}>
                  <Meta
                    title={
                      <Tooltip placement="bottom" title={items.name_comic}>
                        <Typography.Text>{items.name_comic}</Typography.Text>
                      </Tooltip>
                    }
                    description="Chương 11"
                  />
                </NavLink>
              </Card>
            </Col>
          </Row>
        ))}
      </Slider>
    </div>
  );
}
