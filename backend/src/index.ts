import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/index";
dotenv.config();
const app = express();
connectDB();
console.log(process.env.DATABASE_URL)


app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT}`)
})