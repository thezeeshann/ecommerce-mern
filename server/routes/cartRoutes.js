import express from "express";
import {
  add,
  getCarts,
  deleteProductFromCart,
} from "../controllers/cartController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", authenticateJwt,getCarts);
router.post("/", authenticateJwt, add);
router.delete("/", authenticateJwt, deleteProductFromCart);

export default router;
