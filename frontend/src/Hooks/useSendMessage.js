import toast from "react-hot-toast";
import useConversation from "../Zustand/useConversation";
import { useState } from "react";

const useSendMessage = () => {
  const [loading, setloading] = useState(false);
  const { selectedConverstion, messages, setMessages } = useConversation();

  const sendMessage = async (message) => {
    setloading(true);
    try {
      const res = await fetch(`/api/message/send/${selectedConverstion._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return{sendMessage,loading}
};

export default useSendMessage;
