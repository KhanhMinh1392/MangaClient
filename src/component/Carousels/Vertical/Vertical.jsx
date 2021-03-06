import { Card, Col, Image, Row, Tooltip, Typography } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Vertical.css";

const { Meta } = Card;

export default function Vertical({manga,height}) {
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
                cover={<Image src={items.image} height={height ? height : 260  } />}
              >
                <NavLink to={`/manga/${items._id}`}>
                  <Meta
                    title={
                      <Tooltip placement="bottom" title={items.name_comic}>
                        <Typography.Text>{items.name_comic}</Typography.Text>
                      </Tooltip>
                    }
                    description={items.year}
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
