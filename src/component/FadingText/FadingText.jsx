import React, { useState } from "react";
import "./FadingText.css";
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

export default function FadingText({ content }) {
  const [isExpand, setIsExpand] = useState(false);
  return (
    <section className="fading-text">
      <div className={isExpand ? "text expanded" : "text"}>
        <p>{content}</p>
      </div>
      <NavLink to="#" className="btn" onClick={() => setIsExpand(!isExpand)}>
        More <DownOutlined style={{ fontSize: "14px" }} />
      </NavLink>
    </section>
  );
}
