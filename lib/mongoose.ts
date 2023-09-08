import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL)
    return console.log("[database] MONGODB_URL not found!");
  if (isConnected) return console.log("[database] Connection alreadt exists!");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("[database] connected!");
  } catch (error) {
    console.log("Error while connecting to database: ", error);
  }
};
