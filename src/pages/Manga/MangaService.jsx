import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mangaApi from "../../api/apis/mangaApi";
import Manga from "./Manga";

export default function MangaService() {
  const { id } = useParams();
  const [manga, setManga] = useState([]);
  const [chapter, setChapter] = useState([]);
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
      const getChapter = arr.filter(res => res.id_comic == id);
      setChapter(getChapter);
      return;
    }
    catch (error) {}
  }
  useEffect(() => {
    getManga();
    getChapters();
  }, []);


  return <Manga manga={manga} chapter={chapter} />;
}
