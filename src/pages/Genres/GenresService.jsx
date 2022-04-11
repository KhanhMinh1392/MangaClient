import React, { useEffect, useState } from "react";
import mangaApi from "../../api/apis/mangaApi";
import Genres from "./Genres";
export default function GenresService() {
  const [manga, setManga] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filter, setFilter] = useState([]);

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
        const arrManga = response.category[0].comic_type;
        setFilter(arrManga);
        console.log(arrManga);
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
