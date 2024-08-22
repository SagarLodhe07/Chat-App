import dotenv from "dotenv";
dotenv.config();

export const Config_ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
