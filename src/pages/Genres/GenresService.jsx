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

  useEffect(() => {
    getGenres();
    getManga();
  }, []);

  return <Genres genres={genres} manga={manga} />;
}
