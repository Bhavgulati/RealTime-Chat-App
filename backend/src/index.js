import express from "express";
<<<<<<< HEAD
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {connectDB} from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT

app.use("/api/auth",authRoutes);
app.use(express.json());
app.use(cookieParser());



app.listen(PORT,()=>{
  console.log("server is running on port PORT" + PORT);
  connectDB();
});
=======

import cors from "cors"
const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))
app.listen(5001,()=>{
  console.log("first");
})
>>>>>>> main
