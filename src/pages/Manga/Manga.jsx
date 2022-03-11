import { Row, Col, Image, Button, Typography, Rate } from "antd";
import React from "react";
import "./Manga.css";
export default function Manga() {
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
                <div className="name">
                  <Typography.Title level={2}>I’ve Gone Viral Thanks to My Crush </Typography.Title>
                </div>

                <div className="author">
                  Author: Hello
              
                </div>
                <div className="trans_group">
                  Translated by: tui
        
                </div>

                <div className="genre">
                  Thể loại
                </div>
                <div className="status">
                  <Typography.Text   
                  >
                    On going
                  </Typography.Text>
                </div>

                <div className="manga-rating">
                  
                </div>

                <div className="manga-views">
                  <Typography.Text>12000 </Typography.Text>
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

                  <Button
                  // type="primary"
                  className="btn-add-favorite"
                  // title="Add to Library"
                  // loading={isLoading}
                  // onClick={() =>
                  //   userState[0]
                  //     ? isFollowed
                  //       ? removeFollowingManga(manga.manga_id)
                  //       : addToFollowingManga(manga.manga_id)
                  //     : message_error("You have to login first!")
                  // }
                  >
                    {/* {isFollowed ? "Remove from Library" : "Add to Library"} */}
                    Đọc
                  </Button>
                </div>
              </Col>
            </Row>

            <Row justify={"center"} className="middle">
              <Col span={24} md={22} lg={23} xxl={22} className="desc-wrapper">
                <div className="desc">
                  <h2>Description</h2>
                </div>
              </Col>
              <Col span={24} md={22} lg={23} xxl={22} className="chapter-list">
                <h3>Chapters</h3>
                <div className="line"></div>

                {/* <ListChapters
                  // chapters={chapters}
                  // mangaId={manga.manga_id}
                  // height={"400px"}
                  // addReadingHistory={(mangaId, chapterId) => addReadingHistory(mangaId, chapterId)}
                /> */}
              </Col>

              <Col
                span={24}
                md={22}
                lg={23}
                xxl={16}
                className="manga-comments"
              >
                {/* <Spacing /> */}
                {/* <div className="comments">
                  <h2>MangaClawers Comments</h2>
                  <div className="comments-body">
                    <CommentItems comments={comments} isEndCmts={isEndCmts} />
                  </div>
                </div> */}
              </Col>

              <Col span={24} md={22} lg={23} xxl={6} className="rank-list">
                {/* <div className="top-week-rank">
                  <h3>Weekly Manga Ranking</h3>

                  <ListSide mangas={weeklyMangas} height={"415px"} />
                </div>
                <div className="favorite-suggest">
                  <h3>You may also like</h3>

                  <ListSide mangas={suggestionList} height={"415px"} />
                </div> */}
              </Col>

              {/* <Col span={24} md={17} xl={17} xxl={22} className="home-footer">
                            <FooterContainer />
                        </Col> */}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
