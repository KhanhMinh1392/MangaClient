import React, { useEffect, useState } from 'react'
import userApi from '../../api/apis/userApi';
import Profile from './Profile'

export default function ProfileService() {
  const [info,setInfo] = useState([]);
  
  const getInfo = async () => {
    const idLocal = localStorage.getItem('id');
    try {
      const info = await userApi.getInfo(idLocal);
      setInfo(info.user);
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getInfo();
 
  },[])
  return (
    <div>
        <Profile info={info} />
    </div>
  )
}
