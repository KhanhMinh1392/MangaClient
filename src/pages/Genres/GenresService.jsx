import React, { useEffect, useState } from "react";
import mangaApi from "../../api/apis/mangaApi";
import Genres from "./Genres";
export default function GenresService() {
  const [manga, setManga] = useState([]);
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      const response = await mangaApi.getGenres();
      setGenres(response.categories);
      return;
    } catch (error) {}
  };
  const getManga = async () => {
    try {
      const response = await mangaApi.getTop();
      setManga(response.comics);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterManga = async (param) => {
    if (param) {
      try {
        const data = {
          name_cate: param
        }
        const response = await mangaApi.getFilterManga(data);
        const arrManga = response.category.comic_type;
        setManga(arrManga);
      } catch (error) {
        console.error(error); 
      }
    }
  };

  useEffect(() => {
    getManga();
    getGenres();
    getFilterManga();
  }, []);

  return <Genres genres={genres} manga={manga} getFilterManga={(param) => getFilterManga(param)}/>;
}
