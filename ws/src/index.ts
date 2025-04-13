import { WebSocketServer } from "ws";
import express from "express";
import http from "http";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const JWT_SECRET = process.env.SECRET as string
// console.log(JWT_SECRET) // Replace with env var in production

type User = {
    room: string;
    ws: any;
    userId: string;
    role: "doctor" | "patient";
};

const users: { [key: string]: User } = {};
let counter = 0;

// Mock DB: appointment to doctor & patient mapping
const appointmentDB = {
    "appointment_1": {
        doctorId: "doc123",
        patientId: "pat456"
    },
    "appointment_2": {
        doctorId: "doc789",
        patientId: "pat999"
    }
};

function isAuthorizedToJoin(roomId: string, userId: string): boolean {
    //@ts-ignore
    const appointment = appointmentDB[roomId];
    if (!appointment) return false;
    return appointment.doctorId === userId || appointment.patientId === userId;
}

wss.on("connection", async (ws, req) => {
    const wsId = counter++;

    ws.on("message", (message: string) => {
        const data = JSON.parse(message.toString());

        if (data.type === "join") {
            const { roomId, token } = data.payload;

            try {
                const decoded: any = jwt.verify(token, JWT_SECRET);
                const userId = decoded.userId;
                const role = decoded.role;

                // Check if user is authorized for this appointment room
                if (!isAuthorizedToJoin(roomId, userId)) {
                    ws.send(JSON.stringify({
                        type: "error",
                        payload: { message: "Unauthorized access to room" }
                    }));
                    return;
                }

                // Store user connection
                users[wsId] = {
                    room: roomId,
                    ws,
                    userId,
                    role
                };

                ws.send(JSON.stringify({
                    type: "joined",
                    payload: { roomId }
                }));

            } catch (err) {
                ws.send(JSON.stringify({
                    type: "error",
                    payload: { message: "Invalid or expired token" }
                }));
            }
        }

        if (data.type === "message") {
            const sender = users[wsId];
            if (!sender) {
                ws.send(JSON.stringify({
                    type: "error",
                    payload: { message: "You must join a room first." }
                }));
                return;
            }

            const roomId = sender.room;
            const message = data.payload.message;

            Object.keys(users).forEach((id) => {
                if (users[id].room === roomId) {
                    users[id].ws.send(JSON.stringify({
                        type: "message",
                        payload: {
                            message,
                            from: sender.userId
                        }
                    }));
                }
            });
        }
    });

    ws.on("close", () => {
        delete users[wsId];
    });
});

server.listen(3001, () => {
    console.log("WebSocket server running on port 3001");
});
