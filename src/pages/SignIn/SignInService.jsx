import React, { useState } from "react";
import authApi from "../../api/apis/authApi";
import {
  message_error,
  message_success,
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
        console.log(response);
        if(response === 403) {
          message_error(response.message);
        }

        message_success(response.message);
        localStorage.setItem("token", response.token);

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
