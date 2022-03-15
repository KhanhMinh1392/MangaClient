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
  {
    path: "/manga",
    component: React.lazy(() => import("../../pages/Manga/Manga")),
    exact: true,
  },
  {
    path: "/chapter",
    component: React.lazy(() => import("../../pages/Chapter/Chapter")),
    exact: true,
  },
];

export default routes;
