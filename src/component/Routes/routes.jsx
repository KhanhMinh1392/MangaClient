import React from "react";

const routes = [
  {
    path: "/",
    component: React.lazy(() => import("../../pages/Home/Home")),
    exact: true,
  },
  {
    path: "/genres",
    component: React.lazy(() => import("../../pages/Genres/Genres")),
    exact: true,
  },
];

export default routes;
