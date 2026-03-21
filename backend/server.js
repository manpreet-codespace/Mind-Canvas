import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";


const app= express();

app.use(cors);
app.use(express.json());


connectDB();



app.listen(process.env.PORT,()=>{
    console.log(`server is listening on ${process.env.PORT}`)
}
)