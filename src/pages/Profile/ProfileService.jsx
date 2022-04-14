import React, { useEffect, useState } from "react";
import userApi from "../../api/apis/userApi";
import { message_success } from "../../component/Notification/Message";
import Profile from "./Profile";

export default function ProfileService() {
  const idLocal = localStorage.getItem("id");

  const [info, setInfo] = useState([]);
  const [library, setLibrary] = useState([]);

  const getInfo = async () => {
    try {
      const info = await userApi.getInfo(idLocal);
      setInfo(info.user);
      return;
    } catch (error) {}
  };

  const getLibrary = async () => {
    try {
      const listLibrary = await userApi.getListLibrary();
      const arrList1 = listLibrary.data;

      const resultList = arrList1.filter((value) => value.id_user === idLocal);

      setLibrary(resultList);
      return;
    } catch (error) {}
  };
  const deleteLibrary = async (id_library, id_comic) => {
    if (id_library && id_comic) {
      try {
        const data = {
          id_library: id_library,
          id_comic: id_comic,
        };
        const deleteLibrary = await userApi.deleteLibrary(data);
        const newList = deleteLibrary.data[0].comic;
        setLibrary(newList);
        message_success("Deleted success");
        return;
      } catch (error) {}
    }
  };
  
  useEffect(() => {
    getLibrary(); 
    deleteLibrary();
  }, [library]);
  useEffect(() => {
    getInfo();
    
  }, []);
  return (
    <div>
      <Profile
        info={info}
        library={library}
        deleteLibrary={(id_library, id_comic) =>
          deleteLibrary(id_library, id_comic)
        }
      />
    </div>
  );
}
