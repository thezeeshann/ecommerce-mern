import express from "express";
import {
  createOrder,
  getOrders,
  getOrdersAdmin,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";
import { authenticateJwt, isAdmin } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", authenticateJwt, getOrders);
router.get("/admin", authenticateJwt, getOrdersAdmin);
router.post("/", authenticateJwt, createOrder);
router.get("/:orderId", authenticateJwt, getSingleOrder);
router.get("/:orderId", authenticateJwt, getSingleOrder);
router.put("/", authenticateJwt, isAdmin, updateOrderStatus);
router.delete("/:orderId", authenticateJwt, deleteOrder);

export default router;
