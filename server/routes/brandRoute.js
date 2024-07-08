import express from "express";
import {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
  getBrandById,
} from "../controllers/brandController.js";
import { authenticateJwt, isAdmin } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", getAllBrands);
router.get("/:brandId", getBrandById);
router.post("/create", authenticateJwt, isAdmin, createBrand);
router.put("/update/:brandId", authenticateJwt, updateBrand);
router.delete("/delete", authenticateJwt, isAdmin, deleteBrand);

export default router;
