import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const MONGO_URI = process.env.DATABASE_URL as string;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  }
};
