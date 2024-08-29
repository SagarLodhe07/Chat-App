import React from "react";
import Chat from "./Chat";
import useGetConversation from "../Hooks/useGetConversation.js";
import { useListenMessage } from "../Hooks/useListenMessage.js";

const Conversations = () => {
  const { loading, conversations } = useGetConversation();
  // console.log("Conversations", conversations);
  useListenMessage();
  return (
    <div className="flex py-5 flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Chat
          key={conversation._id}
          lastIdx={idx === conversations.length - 1}
          conversation={conversation}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
