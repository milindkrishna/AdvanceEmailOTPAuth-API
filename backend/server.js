import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 5000;
import { connectDB } from "./db/db.config.js";
import authRoutes from "./routes/auth.route.js";


app.use(express.json())
app.use(cookieParser()) // allow to parse incoming cookies

app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})