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
    path: "/manga/:id",
    component: React.lazy(() => import("../../pages/Manga/MangaService")),
    exact: true,
  },
  {
    path: "/manga/:id/chapter",
    component: React.lazy(() => import("../../pages/Chapter/Chapter")),
    exact: true,
  },
  {
    path: "",
    component: React.lazy(() => import("../../pages/NotFound404/NotFound404")),
    exact: true,
  },
];

export default routes;
