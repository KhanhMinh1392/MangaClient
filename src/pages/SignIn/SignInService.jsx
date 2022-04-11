import React from "react";
import authApi from "../../api/apis/authApi";
import userApi from "../../api/apis/userApi";
import {
  message_error,
  message_success
} from "../../component/Notification/Message";
import SignIn from "./SignIn";
export default function SignInService({ setShow }) {

  const handleSignIn = async (email, password) => {
    if (email && password) {
      try {
        const data = {
          email: email,
          password: password,
        };
        const response = await authApi.postSignIn(data);
        if(response.Http_code === 403) {
          message_error(response.message);
          return;
        }

        message_success(response.message);
        localStorage.setItem("id", response.id_user);
        localStorage.setItem("token", response.token);
        //Library
        const listLibrary = await userApi.getListLibrary();
        const arrList1 = listLibrary.data;
  
        const resultList = arrList1.filter((value) => value.id_user === response.id_user);
        localStorage.setItem('id_libra',resultList[0]._id);

        setShow(false);
        return;
        
      } catch (error) {
        // console.log(error);
      }
    } else {
        message_error("Check your inputs value");
    }
  };
  return (
    <SignIn
      setShow={setShow}
      handleSignIn={(email, password) => handleSignIn(email, password)}
    />
  );
}
