import toast from "react-hot-toast";
import useConversation from "../Zustand/useConversation";
import { useEffect, useState } from "react";

const useGetMessage = () => {
  const [loading, setloading] = useState(false);
  const { selectedConverstion, messages, setMessages } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      setloading(true);
      try {
        const res = await fetch(`/api/message/${selectedConverstion._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setloading(false);
      }
    };
    if (selectedConverstion?._id) getMessage();
  }, [selectedConverstion?._id, setMessages]);
  return { messages, loading };
};

export default useGetMessage;
