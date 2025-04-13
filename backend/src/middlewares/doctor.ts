import { NextFunction } from "express-serve-static-core";
import {Request,Response} from "express";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config();

export const doctorMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers["doctor-token"];

    const decoded = jwt.verify(token as string,process.env.SECRET as string);
    console.log(decoded);

    if(decoded){
        //@ts-ignore
        req.doctorId = decoded.id;
        next();
    }
    else{
        res.status(403).json({
            message : "you're not logged in"
        })
        return ;
    }
}   