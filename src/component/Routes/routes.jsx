import React from "react";

const routes = [
  {
    path: "/",
    component: React.lazy(() => import("../../pages/Home/Home")),
    exact: true,
  },
  {
    path: "/genres",
    component: React.lazy(() => import("../../pages/Genres/GenresService")),
    exact: true,
  },
  {
    path: "/manga/:id",
    component: React.lazy(() => import("../../pages/Manga/MangaService")),
    exact: true,
  },
  {
    path: "/manga/:id/:idChapter",
    component: React.lazy(() => import("../../pages/Chapter/ChapterService")),
    exact: true,
  },
  {
    path: "/profile",
    component: React.lazy(() => import("../../pages/Profile/ProfileService")),
    exact: true,
  },
  {
    path: "",
    component: React.lazy(() => import("../../pages/NotFound404/NotFound404")),
    exact: true,
  },
];

export default routes;
