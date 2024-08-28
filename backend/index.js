import express from "express";

import authRouter from "./Routes/authRoute.js";
import { Config_ENV } from "./Configuration/configFile.js";
import { Connect_DB } from "./Configuration/dbConfig.js";
import cookieParser from "cookie-parser";
import messageRouter from "./Routes/messageRoute.js";
import userRouter from "./Routes/userRoute.js"
import { app, server } from "./Socket_IO/socket.js";

const PORT = Config_ENV.PORT || 3000;


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter );

server.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
  Connect_DB()
});
