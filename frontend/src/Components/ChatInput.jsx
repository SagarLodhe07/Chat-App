import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useSendMessage from "../Hooks/useSendMessage";
const ChatInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return; 
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full relative mb-1 ">
        <input
          type="text"
          className="w-full outline-none p-2 block rounded-md border-2 bg-transparent border-gray-300 text-gray-600"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <IoIosSend className="text-sky-600/70 size-7 mr-2" />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
