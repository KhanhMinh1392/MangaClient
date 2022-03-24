import React from "react";
import "./NotFound404.css";
import { NavLink } from "react-router-dom";
import imageNotFound from "../../assets/img/page404.jpg";
import { Typography } from "antd";

const { Title, Text } = Typography;

export default function NotFound404() {
  return (
    <div className="page-404">
      <img
        src={imageNotFound}
        alt=""
        style={{
          width: "500px",
          marginBottom: "40px",
          transform: "scale(1.2)",
        }}
      />

      <Title level={3}>Look like something wrong!</Title>
      <Title style={{ marginTop: 0 }} level={4}>
        The page you were looking for is not here
      </Title>

      <Text style={{ color: "#909090" }}>
        Go back to
        <NavLink
          style={{
            color: "#909090",
            textDecoration: "underline",
            marginLeft: "4px",
          }}
          to="/"
        >
          Home
        </NavLink>
      </Text>
    </div>
  );
}
