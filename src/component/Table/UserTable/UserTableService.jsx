import React, { useEffect } from "react";
import userApi from "../../../api/apis/userApi";
import UserTable from "./UserTable";
export default function UserTableService() {
  const getAllUsers = async () => {
      try {
          const allUsers = await userApi.getAllUser();
          console.log(allUsers);
      } catch (error) {
          
      }
  };
  useEffect(()=> {
      getAllUsers();
  },[])
  return <UserTable />;
}
