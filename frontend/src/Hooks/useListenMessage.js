import { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext";
import useConversation from "../Zustand/useConversation";
import notificationSound from "../assets/Sounds/Bell.mp3";

export const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
      new Audio(notificationSound).play();
    });
    return () => socket?.off("newMessage");
  }, [messages, setMessages, socket]);
};
