import React, { useEffect, useState } from "react";
import mangaApi from "../../api/apis/mangaApi";
import Navbar from "./Navbar";

export default function NavbarService() {
  const [manga, setManga] = useState([]);

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
    getManga();
  }, []);
  return <Navbar manga={manga}/>;
}
