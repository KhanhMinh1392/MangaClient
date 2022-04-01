import React, { useEffect,useState } from 'react';
import MangaTable from './MangaTable'
import mangaApi from "../../../api/apis/mangaApi";

export default function MangaTableService() {
  const [manga, setManga] = useState([]);
  const getAllManga = async () => {
    try {
      const response = await mangaApi.getTop();
      setManga(response.comics);
      return;
    } catch (error) {
      console.log(error);
    } 
  };
  useEffect(() => {
    getAllManga();
  }, []);
  return (
    <MangaTable manga={manga} />
  )
}
