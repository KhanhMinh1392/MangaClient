import React, { useEffect, useState } from 'react'
import mangaApi from '../../api/apis/mangaApi';
import userApi from '../../api/apis/userApi';
import Profile from './Profile'

export default function ProfileService() {
  const idLocal = localStorage.getItem('id');
  
  const [info,setInfo] = useState([]);
  const [library,setLibrary] = useState([]);
  const getInfo = async () => {
    try {
      const info = await userApi.getInfo(idLocal);
      setInfo(info.user);
    } catch (error) {
      
    }
  }
  
  const getLibrary = async () => {
    try {
      const listLibrary = await userApi.getListLibrary();
      const arrList1 = listLibrary.data;

      const resultList = arrList1.filter((value) => value.id_user === idLocal);
      const arrList2 = resultList[0].comic;
      setLibrary(arrList2);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getInfo();
    getLibrary();
  },[])
  return (
    <div>
        <Profile info={info} library={library} />
    </div>
  )
}
