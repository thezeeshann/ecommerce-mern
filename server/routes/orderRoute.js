import express from "express";
import {
  createOrder,
  getOrders,
  getSingleOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", authenticateJwt, getOrders);
router.post("/", authenticateJwt, createOrder);
router.get("/:orderId", authenticateJwt, getSingleOrder);
router.delete("/:orderId", authenticateJwt, deleteOrder);

export default router;
