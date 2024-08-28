import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const IO = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId =(recieverId)=>{
  return userSocketMap[recieverId]
}
const userSocketMap = {};
IO.on("connection", (socket) => {
  console.log("A User Connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  IO.emit("getOnlineUsers", Object.keys(userSocketMap));
  
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    delete userSocketMap[userId]
    IO.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});
export { app, IO, server };
