import React from "react";
import Chatbox from "./Chatbox";
import ChatInput from "./ChatInput";
import WelcomePage from "./WelcomePage";

const MessageBox = () => {
  const notSelectedChat = 1;
  return (
    <div className="w-full overflow-hidden flex flex-col">
      {notSelectedChat ? (
        <WelcomePage />
      ) : (
        <>
          <div className="bg-slate-400 px-4 py-2 mb-2">
            <span className="text-gray-600">To: </span>
            <span className="text-gray-900 font-bold">Jon Doe</span>
          </div>

          <Chatbox />
          <ChatInput />
        </>
      )}
    </div>
  );
};

export default MessageBox;
