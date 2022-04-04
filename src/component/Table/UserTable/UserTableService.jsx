import React, { useEffect, useState } from "react";
import userApi from "../../../api/apis/userApi";
import UserTable from "./UserTable";
export default function UserTableService() {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    try {
      const allUsers = await userApi.getAllUser();
      setUsers(allUsers.users);
    } catch (error) {}
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return <UserTable users={users} />;
}
