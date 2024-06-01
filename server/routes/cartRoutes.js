import express from "express";
import { add, getCarts } from "../controllers/cartController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.post("/", authenticateJwt, add);
router.get("/", getCarts);

export default router;
