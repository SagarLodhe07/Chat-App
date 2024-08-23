import React from "react";
import Chat from "./Chat";

const Conversations = () => {
  return (
    <div className="flex py-5 flex-col overflow-auto border-r-2" >
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
};

export default Conversations;
