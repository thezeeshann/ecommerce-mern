import express from "express";
import {
  priceLowTOHignProducts,
  priceHighToLowProducts,
  createProducts,
  updateProducts,
  getAllProducts,
  getSingleProduct,
  deleteProducts,
} from "../controllers/productsControllers.js";
import { isAdmin, authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/price-low", priceLowTOHignProducts);
router.get("/price-high", priceHighToLowProducts);
router.get("/", getAllProducts);
router.get("/:slug", getSingleProduct);
router.post("/create", authenticateJwt, isAdmin, createProducts);
router.put("/update/:id", authenticateJwt, isAdmin, updateProducts);
router.delete("/:id", authenticateJwt, isAdmin, deleteProducts);

export default router;
