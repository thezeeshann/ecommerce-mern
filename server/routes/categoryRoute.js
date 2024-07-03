import express from "express";
import { add, getCategory } from "../controllers/categoryController.js";
import { authenticateJwt, isAdmin } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/add", authenticateJwt, isAdmin, add);
// router.post("/create", authenticateJwt, createBrand);
// router.put("/update/:brandId", authenticateJwt, updateBrand);
// router.delete("/delete/:brandId", authenticateJwt, deleteBrand);

export default router;
