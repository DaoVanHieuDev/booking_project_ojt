import express from 'express';
import configDotenv from 'dotenv';
import mongoose from 'mongoose';
import authRouter from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';
configDotenv.config();
const app = express();
app.use(cookieParser());
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("--------- > Connected to mongoDB");


    } catch (error) {
        throw error
    }
}


//? middleware
app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })

    next();
})
app.listen(8800, () => {

    connect()
    console.log('-------------> Server running on port 8800')
}
);