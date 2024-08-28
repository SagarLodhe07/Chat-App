import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../Hooks/useGetMessage";

const Chatbox = () => {
  const { messages, loading } = useGetMessage();
  console.log("Messages", messages);

  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      <div className="flex justify-center items-center">
        {loading ? <div className="loading loading-spinner size-10"></div> : ""}
      </div>

      {!loading && messages.length === 0 && (
        <p className="text-center">Send message to start conversation</p>
      )}
    </div>
  );
};

export default Chatbox;
