import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mangaApi from "../../api/apis/mangaApi";
import { message_success } from "../../component/Notification/Message";
import Manga from "./Manga";

export default function MangaService() {
  const { id } = useParams();
  const [manga, setManga] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [genre, setGenre] = useState([]);
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getManga = async () => {
    try {
      const params = {
        manga_id: id,
      };
      const response = await mangaApi.getManga(params);
      const mangaObj = response.comic;

      setManga(mangaObj);
      // console.log(response.comic.categories);
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

  const postComicLibrary = async (id_user, id_comic) => {
    if (id_user && id_comic) {
      setIsLoading(true)
      try {
        const data = {
          id_user: id_user,
          comic: [id_comic],
        };
        const response = await mangaApi.postComicLibrary(data);
        localStorage.setItem("id_libra", response.library._id);
        message_success("Added to your library", 3);
        setIsFollowed(false);
        setIsLoading(false);
        return;
      } catch (error) {}
    }
  };

  const updateComicLibrary = async (id_libra, id_comic) => {
    if (id_libra && id_comic) {
      try {
        const data = {
          comic: [id_comic],
        };
        const response = await mangaApi.updateComicLibrary(id_libra, data);
        message_success("Added to your library", 3);
        setIsFollowed(false);
        setIsLoading(false);
        return;
      } catch (error) {}
    }
  };

  useEffect(() => {
    getManga();
    getChapters();
    getGenres();
    postComicLibrary();
    updateComicLibrary();
  }, []);

  return (
    <Manga
      manga={manga}
      chapter={chapter}
      genre={genre}
      postComicLibrary={(id_user, id_comic) =>
        postComicLibrary(id_user, id_comic)
      }
      updateComicLibrary={(id_libra, id_comic) =>
        updateComicLibrary(id_libra, id_comic)
      }
      isLoading={isLoading}
      isFollowed={isFollowed}
    />
  );
}
