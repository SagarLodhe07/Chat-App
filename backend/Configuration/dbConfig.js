import mongoose from "mongoose";
import { Config_ENV } from "./configFile.js";

export const Connect_DB = async () => {
  try {
    await mongoose.connect(Config_ENV.DB_URL);
    console.log(`Connected to Database`);
  } catch (error) {
    console.log();
    console.log(`Failed to connect Database`, error.message);
  }
};
