import { Col, Image } from "antd";
import React from "react";
import './Chapter.css';

export default function ImgChapter() {
  const imgs = [
    "https://s200.imacdn.com/tt24/2020/12/27/5c003d0cd1b7ff63_cd10991f133ac41f_404592160907576059674.jpg",
    "https://docsach247.com/wp-content/uploads/2021/01/img-00003.jpg",
    "https://s199.imacdn.com/tt24/2021/03/26/80878f244b73a72f_0e50fbea009a29a7_551359161676667349674.jpg",
    "https://s199.imacdn.com/tt24/2021/03/26/ebaa9e2511e3621b_b24fba0b23db4610_449182161676667429674.jpg",
    "https://s199.imacdn.com/tt24/2021/03/26/80878f244b73a72f_0e50fbea009a29a7_551359161676667349674.jpg",
  ];
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
      {imgs.map((img, index) => (
        <div className="page" id={index}>
          <Image className="img" id={index} src={img} alt="" />
        </div>
      ))}
    </Col>
  );
}
