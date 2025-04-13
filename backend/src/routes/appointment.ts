import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {AppointmentModel} from "../database/appointment"
import { patientMiddleware } from "../middlewares/patient";
const router = express.Router();
dotenv.config();

router.get("/getappointments", patientMiddleware, async(req : any,res : any)=>{
    //@ts-ignore
    const appointments = await AppointmentModel.find({
        where : {
            //@ts-ignore
            patient : req.patientid
        }
    })
    return res.json({
        appointments
    })
})


router.post("/book",patientMiddleware,async (req,res)=>{
    const {patientId,doctorId,date} = req.body;
   const ap = await AppointmentModel.create({
        patient : patientId,
        doctor : doctorId,
        date : new Date(date),
    })
    if(!ap){
        res.status(400).json({
            message : 'failed to create appointment'
        })
    }

    const app_token = jwt.sign({id : ap._id,},process.env.SECRET as string)

    res.status(200).json({
        token : app_token
    })

})


export const appointmentRouter = router;