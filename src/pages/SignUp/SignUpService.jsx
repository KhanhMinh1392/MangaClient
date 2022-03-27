import React from "react";
import authApi from "../../api/apis/authApi";
import { message_success , message_error } from "../../component/Notification/Message";
import SignUp from "./SignUp";

export default function SignUpService({setShowSignUp}) {

  const handleSignUp = async (name, email, phone, password) => {
    if (name && email && phone && password) {
      try {
        const data = {
          name: name,
          email: email,
          phone: phone,
          password: password,
        };
        const response = await authApi.postSignUp(data);
        console.log(response.message);
        if(response.Http_code === 403) {
          message_error(response.message);
          return;
        }
        message_success(response.message);

        setShowSignUp(false);
        return;
        
      } catch (error) {
        message_error("Check your inputs value");
      }
    }
  };
  return <SignUp handleSignUp={(name,email,phone,password) =>{handleSignUp(name,email,phone,password)}} setShowSignUp={setShowSignUp} />;
}
