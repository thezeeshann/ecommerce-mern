import express from "express";
import {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
  getBrandById,
} from "../controllers/brandController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", getAllBrands);
router.get("/:brandId", getBrandById);
router.post("/create", authenticateJwt, createBrand);
router.put("/update/:brandId", authenticateJwt, updateBrand);
router.delete("/delete/:brandId", authenticateJwt, deleteBrand);

export default router;
