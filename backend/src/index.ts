import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/index";
import { userRouter } from "./routes/patient";
import { doctorRouter } from "./routes/doctor";
dotenv.config();
const app = express();
app.use(express.json())
connectDB();

app.use("/api/v1/patient",userRouter);
app.use("/api/v1/doctor",doctorRouter);

app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT}`)
})