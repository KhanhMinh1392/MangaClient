import { Button, Col, Divider, Image, Row, Tag, Typography } from "antd";
import React from "react";
import FadingText from "../../component/FadingText/FadingText";
import ListChapter from "../../component/List/ListChapter/ListChapter";
import ListVer from "../../component/List/ListVer2/ListVer";
import "./Manga.css";
export default function Manga() {
  const description =
    "To become my woman, He Qiaoyan, you must fulfill these three conditions: to like being pampered, to like being loved, and to like being taken good care of. You have fulfilled all the requirements, and all that's left is for you to be aware that you belong to me!";

  return (
    <>
      <div className="manga">
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
                  src="http://i.truyenvua.com/ebook/190x247/duoi-bong-cay-soi_1625474458.jpg?r=r8645456"
                  alt=""
                />
              </Col>
              <Col md={13} lg={12} sm={4} xs={20} xxl={15} className="title">
                <div className="details-comic">
                  <div className="name">
                    <Typography.Title level={2}>
                      I’ve Gone Viral Thanks to My Crush{" "}
                    </Typography.Title>
                  </div>
                  {/* <div className="manga-rating"><Rate count={5} /></div> */}
                  <div className="author">Author: Ake Culture</div>
                  <div className="trans_group">Translated by: Khanh Minh</div>
                  <div className="genre">
                    Thể loại:
                    <div className="tag">
                      <Tag color="#f50">Humor</Tag>
                      <Tag color="#2db7f5">Horror</Tag>
                      <Tag color="#87d068">Superhero</Tag>
                      <Tag color="#108ee9">Slice-of-Life</Tag>
                    </div>
                  </div>
                  <div className="status">
                    <Typography.Text>On going</Typography.Text>
                  </div>

                  <div className="manga-views">
                    <Typography.Text>Views: 12000 </Typography.Text>
                  </div>

                  <div className="interact">
                    <Button className="btn-read-now" title="Read Now">
                      {/* <NavLink
                      to={`/chapter/${manga.manga_id}/${chapterId01}`}
                      style={{ marginLeft: 0 }}
                    >
                      Read Now
                    </NavLink> */}
                      Read Now
                    </Button>

                    <Button className="btn-add-favorite">Add to Library</Button>
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
                  <FadingText content={description} />
                </div>
              </Col>
              <Col span={24} md={22} lg={23} xxl={22} className="chapter-list">
                <Divider orientation="left">
                  <h2>Chapters</h2>
                </Divider>
                <ListChapter />
              </Col>

              <Col
                span={24}
                md={22}
                lg={23}
                xxl={16}
                className="manga-comments"
              >
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24, offset: 1 }} lg={{ span: 24, offset: 1 }}>
            <Divider orientation="left">
              <h2>Feature</h2>
            </Divider>
            <ListVer />
          </Col>
        </Row>
        ,
      </div>
    </>
  );
}
