import { Col, Divider, Row } from "antd";
import React, { useEffect, useState } from "react";
import mangaApi from "../../api/apis/mangaApi";
import ListGenres from "../../component//List/ListGenres/ListGenres";
import BackUp from "../../component/BackUp/BackUp";
import Vertical from "../../component/Carousels/Vertical/Vertical";
import PopularManga from "../../component/PopularManga/PopularManga";
import "./Home.css";

export default function Home() {
  const [manga, setManga] = useState([]);
  const getManga = async () => {
    try {
      const response = await mangaApi.getTop();
      setManga(response.comics);
      return;
    } catch (error) {
      console.log(error);
    } 
  };
  useEffect(() => {
    getManga();
  }, []);
  return (
    <>
    
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={18}>
          <div className="daily-manga">
            <Divider orientation="left" style={{ borderTopColor: "#a2a2a2" }}>
              <h2>Daily Manga</h2>
            </Divider>
            <Vertical manga={manga} height={308} />
          </div>

          <div>
            <Divider orientation="left" style={{ borderTopColor: "#a2a2a2" }}>
              <h2>Featured Manga</h2>
            </Divider>
            <ListGenres height="330px" manga={manga} />
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div className="popular-manga">
            <Divider orientation="cemter" style={{ borderTopColor: "#a2a2a2" }}>
              <h2>Popular Manga</h2>
            </Divider>
            <PopularManga />
          </div>
          <div className="review-manga">
            <Divider
              orientation="cemter"
              style={{ borderTopColor: "#a2a2a2", marginTop: "28px" }}
            >
              <h2>Comedy Manga</h2>
            </Divider>
            <PopularManga />
          </div>
        </Col>
      </Row>
      <BackUp zIndex="99" />
    </>
  );
}
