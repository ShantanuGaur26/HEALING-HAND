import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./database/index";
import { userRouter } from "./routes/patient";
import { doctorRouter } from "./routes/doctor";
import { appointmentRouter } from "./routes/appointment";
dotenv.config();
const app = express();
app.use(express.json())
connectDB();
app.use(cors({
    origin : "http://localhost:5173",
    methods : ["POST","GET"],
    credentials : true
  }));

app.use("/api/v1/patient",userRouter);
app.use("/api/v1/doctor",doctorRouter);
app.use("/api/v1/appointment",appointmentRouter);

app.listen(process.env.PORT,()=>{
    console.log(`app running on ${process.env.PORT}`)
})