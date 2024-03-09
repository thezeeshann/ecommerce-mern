import express from "express";
import { updateProfile,updateUsername } from "../controllers/profileController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();
router.put("/updateProfile", authenticateJwt, updateProfile);
router.put("/updateUsername",authenticateJwt,updateUsername)

export default router;
