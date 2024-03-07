import express from "express";
import { authenticateJwt } from "../middleware/authenticateJwt.js";
import {
  register,
  login,
  changePassword,
} from "../controllers/authController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/changePassword", authenticateJwt, changePassword);

export default router;
