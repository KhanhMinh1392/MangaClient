import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import chapterApi from "../../api/apis/chapterApi";
import mangaApi from "../../api/apis/mangaApi";
import Manga from "./Manga";

export default function MangaService() {
  const { id } = useParams();
  const [manga, setManga] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [genre, setGenre] = useState([]);
  const getManga = async () => {
    try {
      const params = {
        manga_id: id,
      };
      const response = await mangaApi.getManga(params);
      const mangaObj = response.comic;

      setManga(mangaObj);
      
      return;
    } catch (error) {}
  };
  const getChapters = async () => {
    try {
      const response = await mangaApi.getMangaChapters();
      const arr = response.chapters;
      const getChapter = arr.filter((res) => res.id_comic == id);
      setChapter(getChapter);
      return;
    } catch (error) {}
  };

  const getGenres = async () => {
    try {
      const response = await mangaApi.getGenres();
      const arr = response.categories;
      const getGenres = arr.filter((res) => res.comic_type == id);
      setGenre(getGenres);
      return;
    } catch (error) {}
  };

  useEffect(() => {
    getManga();
    getChapters();
    getGenres();
  }, []);

  return <Manga manga={manga} chapter={chapter} genre={genre} />;
}
