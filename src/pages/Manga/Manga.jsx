import { EyeOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Image, Rate, Row, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import BackUp from "../../component/BackUp/BackUp";
import FadingText from "../../component/FadingText/FadingText";
import ListChapter from "../../component/List/ListChapter/ListChapter";
import { message_error } from "../../component/Notification/Message";
import "./Manga.css";
export default function Manga({ manga, chapter, genre , postComicLibrary , updateComicLibrary}) {
  const { id } = useParams();
  const [chapterId01, setChapterId01] = useState("");

  useEffect(()=> {
    if (chapter[0]) {
      setChapterId01(chapter[0]._id);
    }
  },[chapter])

  const handleAddLibra = () => {
    if(localStorage.getItem("token") === null) {
      message_error("You must sign in to add library",3);
    }
    if(localStorage.getItem("id_libra")) {
      updateComicLibrary(localStorage.getItem("id_libra"), id);
    } else {
      postComicLibrary(localStorage.getItem("id") , id);
    }
  }

  return (
    <>
      <div className="manga" key={manga._id}>
        <Row justify={"center"}>
          <div className="manga-bg">
            <div className="manga-bg-img"></div>
          </div>
        </Row>
        <Row justify={"center"} className="manga-body-row">
          <Col span={23} md={17} xxl={19} className="manga-body">
            <Row justify={"center"} className="header">
              <Col className="thumbnail">
                <Image
                  preview={false}
                  className="thumbnail-img"
                  src={manga.image}
                  alt=""
                />
              </Col>
              <Col md={13} lg={12} sm={4} xs={20} xxl={15} className="title">
                <div className="details-comic">
                  <div className="name">
                    <Typography.Title level={2}>
                      {manga.name_comic}
                    </Typography.Title>
                  </div>
                  <div className="manga-rating">
                    <Rate count={5} defaultValue={manga.rating} />
                  </div>
                  <div className="author">Author: {manga.name_author}</div>
                  <div className="trans_group">
                    Translated by: {manga.translateBy}
                  </div>
                  <div className="genre">
                    Genres:
                    {
                    genre.map((item, i) => (
                      <div className="tag" key={i}>
                        <Tag color={item.color} >
                          {item.name_cate}
                        </Tag>
                      </div>
                    ))}
                  </div>
                  <div className="status">
                    Status: {manga.status}
                  </div>

                  <div className="manga-views">
                    <Typography.Text><EyeOutlined /> {manga.views} </Typography.Text>
                  </div>

                  <div className="interact">
                    <Button className="btn-read-now" title="Read Now">
                      <NavLink to={`/manga/${manga._id}/${chapterId01}`}>
                        Read Now
                      </NavLink>
                    </Button>

                    <Button className="btn-add-favorite" onClick={() => handleAddLibra()}>Add to Library</Button>
                  </div>
                </div>
              </Col>
            </Row>

            <Row justify={"center"} className="middle">
              <Col span={24} md={22} lg={23} xxl={22} className="desc-wrapper">
                <div className="desc">
                  <Divider orientation="left">
                    <h2>Description</h2>
                  </Divider>
                  <FadingText content={manga.content} />
                </div>
              </Col>
              <Col span={24} md={22} lg={23} xxl={22} className="chapter-list">
                <Divider orientation="left">
                  <h2>Chapters</h2>
                </Divider>
                <ListChapter chapter={chapter} manga={manga} />
              </Col>

              <Col
                span={24}
                md={22}
                lg={23}
                xxl={16}
                className="manga-comments"
              ></Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {/* <Col xs={{ span: 24, offset: 1 }} lg={{ span: 24, offset: 1 }}>
            <Divider orientation="left">
              <h2>Feature</h2>
            </Divider>
            <ListVer dataManga={manga} />
          </Col> */}
        </Row>
        ,
      </div>
      <BackUp />
    </>
  );
}
