import { Col, Image } from "antd";
import React from "react";
import './Chapter.css';

export default function ImgChapter({dataImg}) {
  return (
    <Col
      span={23}
      sm={18}
      md={17}
      xl={14}
      xxl={12}
      className="chapter-pages"
      style={{ margin: "20px" }}
    >
      {dataImg.map((img, index) => (
        <div className="page" key={index}>
          <Image className="img" src={img} alt="" />
        </div>
      ))}
    </Col>
  );
}
