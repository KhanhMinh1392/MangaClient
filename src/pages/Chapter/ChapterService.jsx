import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chapter from "./Chapter";
import chapterApi from "../../api/apis/chapterApi"
import { message_error } from "../../component/Notification/Message";


export default function ChapterService() {
  const { id, idChapter } = useParams();
  const [img,setImg] = useState([]);
  const [infoChapter,setInfoChapter] = useState([]);
  
  const getChapterImg = async () => {
    const data = {
        manga_id: id,
        chapter_id: idChapter
    };
   
    try {
      const getImgChapter = await chapterApi.getChapterImg(data);
      const arr = getImgChapter.data;
      const imgChapter = arr.filter((value)=> value.id_chapter === idChapter);
      setImg(imgChapter[0].image);
      return;
    } catch (error) {
      message_error("Nothing image chapter");
    }
  };
  const getChapterInfo = async () => {
    try {
      const getInfo = await chapterApi.getChapterInfo(idChapter);
      setInfoChapter(getInfo.chapters);
    } catch (error) {
      
    }
  }

  useEffect(()=> {
    getChapterImg();
    getChapterInfo();
  },[]);

  return <Chapter img={img} infoChapter={infoChapter} />;
}
