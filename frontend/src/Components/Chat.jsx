import React from "react";
import useConversation from "../Zustand/useConversation";
import { useSocketContext } from "../Context/SocketContext";

const Chat = ({ conversation, lastIdx }) => {
  const { selectedConverstion, setSelectedConversation } = useConversation();
  const isSelect = selectedConverstion?._id === conversation._id;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        className={` flex hover:bg-sky-300  hover:text-white items-center gap-2 rounded p-2 py-1 cursor-pointer
        ${isSelect ? "bg-sky-300 text-white" : ""}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`  avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full border-2">
            <img src={conversation.profileImage} alt="Avatar" className="" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="font-semibold text-md">{conversation.fullname}</p>
            {/* <span>😂</span> */}
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Chat;
