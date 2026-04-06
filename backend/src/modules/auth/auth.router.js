import express from "express";
import { signup,signin,refresh } from "./auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin",signin);
router.post("/refresh",refresh)

export default router;


