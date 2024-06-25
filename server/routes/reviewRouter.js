import express from "express";
import {
  addReview,
  deleteReview,
  getReview,
  getReviewWithProduct,
} from "../controllers/reviewController.js";
import { authenticateJwt, isAdmin } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", getReview);
router.get("/:productId", getReviewWithProduct);
router.post("/create", authenticateJwt, addReview);
router.delete("/delete/:reviewId", authenticateJwt, isAdmin, deleteReview);

export default router;
