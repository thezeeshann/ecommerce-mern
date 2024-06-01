import express from "express";
import { createOrder } from "../controllers/orderController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.post("/", authenticateJwt, createOrder);

export default router;
