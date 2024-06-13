import express from "express";
import { createOrder,getOrders } from "../controllers/orderController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.post("/", authenticateJwt, createOrder);
router.get("/", authenticateJwt, getOrders);

export default router;
