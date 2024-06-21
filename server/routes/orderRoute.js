import express from "express";
import {
  createOrder,
  getOrders,
  getOrdersAdmin,
  getSingleOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", authenticateJwt, getOrders);
router.get("/admin", authenticateJwt, getOrdersAdmin);
router.post("/", authenticateJwt, createOrder);
router.get("/:orderId", authenticateJwt, getSingleOrder);
router.delete("/:orderId", authenticateJwt, deleteOrder);

export default router;
