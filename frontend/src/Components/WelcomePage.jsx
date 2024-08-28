import React from "react";
import { useAuthContext } from "../Context/AuthContext";

const WelcomePage = () => {
  const { authuser,  } = useAuthContext();

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-between items-center gap-2">
        <img src={"/chat.svg"} width={100} alt="logo" className="p-2" />
        <p className="" >Welcome {authuser.fullname.split(" ")[0]}</p>
        <span>Select Chat to start messaging</span>
      </div>
    </div>
  );
};


export default WelcomePage;
