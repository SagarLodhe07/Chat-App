import React from "react";

const WelcomePage = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-between items-center gap-2">
        <img src={"/chat.svg"} width={100} alt="logo" className="p-2" />
        <p>Welcome Jon Doe</p>
        <span>Select Chat to start messaging</span>
      </div>
    </div>
  );
};

export default WelcomePage;
