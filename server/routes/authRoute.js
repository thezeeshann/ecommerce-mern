import express from "express";
import {authenticateJwt,isAdmin} from "../middleware/authenticateJwt.js"
import { register, sendOtp, login } from "../controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/sendotp", sendOtp);

export default router;
