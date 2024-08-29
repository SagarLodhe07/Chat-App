import React from "react";
import useConversation from "../Zustand/useConversation";
import { useAuthContext } from "../Context/AuthContext";
import formatSendMessageTime from "../Utils/TimeFormater.js";

const Message = ({ message }) => {
  const { selectedConverstion } = useConversation();
  const { authuser } = useAuthContext();
  // console.log("Message", message);
  // console.log("Auth", authuser);

  const fromMe = message.senderId === authuser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profileImg = fromMe
    ? authuser.profileImage
    : selectedConverstion?.profileImage;

  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-slate-500";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-12 rounded-md">
          <img src={profileImg} className=" rounded-full border-2" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-sky-400 ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer text-slate-600/50 text-xs flex items-center gap-1">
        {formatSendMessageTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
