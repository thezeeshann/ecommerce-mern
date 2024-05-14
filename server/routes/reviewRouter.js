import express from "express";
import {
  addReview,
  deleteReview,
  getReview,
  getReviewWithProduct
} from "../controllers/reviewController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", getReview);
router.get("/:id", getReviewWithProduct);
router.post("/:id", authenticateJwt, addReview);
router.delete("/", authenticateJwt, deleteReview);

export default router;
