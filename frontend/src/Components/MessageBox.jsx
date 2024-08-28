import React, { useEffect } from "react";
import Chatbox from "./Chatbox";
import ChatInput from "./ChatInput";
import WelcomePage from "./WelcomePage";
import useConversation from "../Zustand/useConversation";

const MessageBox = () => {
  const { selectedConverstion, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full overflow-hidden flex flex-col">
      {!selectedConverstion ? (
        <WelcomePage />
      ) : (
        <>
          <div className="bg-slate-400 px-4 py-2 mb-2">
            <span className="text-gray-600">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConverstion.fullname}
            </span>
          </div>

          <Chatbox />
          <ChatInput />
        </>
      )}
    </div>
  );
};

export default MessageBox;
