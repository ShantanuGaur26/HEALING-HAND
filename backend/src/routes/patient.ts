import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import {PatientModel} from "../database/patient"
const router = express.Router();
dotenv.config();

router.post('/signup', async (req : any, res : any) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ msg: "Email and password are required" });
    }

    const hashed = await bcrypt.hash(Password, 10);

    const result = await PatientModel.findOne({ Email: Email });

    if (result) {
        return res.json({ msg: 'User already exists' });
    }

    const newUser = await PatientModel.create({
        Email: Email,
        Password: hashed
    });

    if (newUser) {
        return res.status(211).json({
            message : `user created`,
          });
    } else {
        res.json({ msg: 'Error creating user' });
    }
});

router.post('/signin', async (req : any, res : any) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({ msg: "Email and password are required" });
    }

    const result = await PatientModel.findOne({ Email: Email });

    if (!result) {
        return res.json({ msg: "User not found" });
    }

    const isValid = await bcrypt.compare(Password, result.Password as string);

    if (!isValid) {
        return res.json({ msg: "Wrong password" });
    }
    else{
        const token = jwt.sign({email : result.Email, id : result._id}, process.env.SECRET as string);
        return res.status(211).json({
            token : token
        });
    }
});



export const userRouter = router;