import { HomeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Dropdown, Row, Tooltip, Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Chapter.css";
import ImgChapter from "./ImgChapter";

export default function Chapter({ img , infoChapter }) {
  const { id } = useParams();
  const dropDownItems = <></>;
    // <Menu>
    //   {chapters
    //     ? chapters.map((chapter, i) => (
    //         <Menu.Item key={i} className="dropdown-item-chapter-page">
    //           <NavLink
    //             title={chapter.chapter_name}
    //             className="dropdown-item-title"
    //             to={`/chapter/${mangaId}/${chapter.chapter_id}`}
    //             onChange={() => setChapterName(chapter.chapter_name)}
    //             onClick={() =>
    //               addReadingHistory(
    //                 chapterInfo.manga.manga_id,
    //                 chapter.chapter_id
    //               )
    //             }
    //           >
    //             <Typography.Text className="title-name">
    //               {chapter.chapter_name}
    //             </Typography.Text>
    //             <Typography.Text className="title-time">
    //               {chapter.createdAt}
    //             </Typography.Text>
    //           </NavLink>
    //         </Menu.Item>
    //       ))
    //     : ""}
    // </Menu>
  // );
  return (
    <Row justify={"center"} className="chapter">
      <Col
        span={23}
        sm={18}
        md={17}
        xl={14}
        xxl={12}
        style={{ textAlign: "center" }}
        className="name-chapter"
      >
        <Tooltip title="Go back to manga page">
          <Button className="btn-home">
            <NavLink to={`/manga/${id}`}>
              <HomeOutlined
                style={{
                  fontSize: "22px",
                  transition: "0.5s",
                }}
              />
            </NavLink>
          </Button>
        </Tooltip>
        <Tooltip title="Previous Chap">
          <Button className="btn-prev">
            <LeftOutlined
              style={{
                fontSize: "22px",
                transition: "0.5s",
              }}
            />
          </Button>
        </Tooltip>
        <Tooltip title={infoChapter.name_chapter} placement="bottom">
          <Dropdown
            className="dropdown-items"
            overlay={dropDownItems}
            trigger={["click"]}
          >
            <Typography.Text
              className="text-chapter"
              title=""
              onClick={(e) => e.preventDefault()}
              style={{
                fontSize: "22px",
                transition: "0.5s",
                margin: "0 100px",
              }}
            >
              {/* {chapterName ? chapterName : chapterInfo.chapter_name} */}
              {infoChapter.name_chapter}
            </Typography.Text>
          </Dropdown>
        </Tooltip>
        <Tooltip title="Next Chap">
          <Button className="btn-next">
            <RightOutlined
              style={{
                fontSize: "22px",
                transition: "0.5s",
              }}
            />
          </Button>
        </Tooltip>
      </Col>
      <ImgChapter dataImg={img} />
    </Row>
  );
}
