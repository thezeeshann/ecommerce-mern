import express from "express"
import { createProducts } from "../controllers/productsControllers.js"

const router = express.Router()
router.post("/create",createProducts)


export default router