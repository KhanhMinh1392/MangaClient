import React, { useEffect, useState } from 'react'
import userApi from '../../../api/apis/userApi';
import GenresTable from './GenresTable'
export default function GenresTableService() {
    const [genres, setGenres] = useState([]);
    const getAllGenres = async () => {
      try {
        const allGenres = await userApi.getAllGenres();
        setGenres(allGenres.categories);
      } catch (error) {}
    };
    useEffect(() => {
        getAllGenres();
    }, []);
  return (
    <>
        <GenresTable genres={genres} />
    </>
  )
}
