import express from "express";
import { add, getCategory,update } from "../controllers/categoryController.js";
import { authenticateJwt, isAdmin } from "../middleware/authenticateJwt.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/add", authenticateJwt, isAdmin, add);
router.put("/update/:categoryId", authenticateJwt, update);
// router.delete("/delete/:brandId", authenticateJwt, deleteBrand);

export default router;
