import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
import router from "./src/modules/auth/auth.router.js";


const app= express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", router);



app.listen(process.env.PORT,()=>{
    console.log(`server is listening on ${process.env.PORT}`)
}
)