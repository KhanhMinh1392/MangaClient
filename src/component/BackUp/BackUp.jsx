import React from "react";
import "./BackUp.css";
import { BackTop } from "antd";
import { UpOutlined } from "@ant-design/icons";
export default function BackUp() {
  return (
    <div style={{ height: "600vh", padding: 8 }}>
      <BackTop>
        <div className="back-up">
          <UpOutlined />
        </div>
      </BackTop>
    </div>
  );
}
