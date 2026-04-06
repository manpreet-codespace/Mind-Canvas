import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";
import router from "./src/modules/auth/auth.router.js";
import cookieParser from "cookie-parser";

const app= express();

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow server-to-server requests and reflect browser origins
            // so credentialed cross-origin requests can succeed.
            if (!origin) {
                return callback(null, true);
            }
            return callback(null, origin);
        },
        credentials: true
    })
);
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use("/api/auth", router);

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on ${process.env.PORT}`)
}
)
