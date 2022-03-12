import { Col, Row, Divider } from "antd";
import React from "react";
import BackUp from "../../component/BackUp/BackUp";
import Vertical from "../../component/Carousels/Vertical/Vertical";
import ListGenres from "../../component//List/ListGenres/ListGenres";
import PopularManga from "../../component/PopularManga/PopularManga";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={18}>
          <div className="daily-manga">
            <Divider orientation="left" style={{ borderTopColor: "#a2a2a2" }}>
              <h2>Daily Manga</h2>
            </Divider>
            <Vertical />
          </div>

          <div>
            <Divider orientation="left" style={{ borderTopColor: "#a2a2a2" }}>
              <h2>Featured Manga</h2>
            </Divider>
            <ListGenres height={"300px"}/>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <Divider orientation="cemter" style={{ borderTopColor: "#a2a2a2" }}>
            <h2>Popular Manga</h2>
          </Divider>
          <PopularManga/>
        </Col>
      </Row>
      <BackUp zIndex="99" />
    </>
  );
}
