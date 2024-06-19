import express from "express";
import { updateProfile,updateUsername,deleteProfile,getSingleUser,getAllUsers } from "../controllers/profileController.js";
import { authenticateJwt } from "../middleware/authenticateJwt.js";

const router = express.Router();
router.get("/getSingleUser", authenticateJwt, getSingleUser);
router.get("/getAllUsers", authenticateJwt, getAllUsers);
router.put("/updateProfile", authenticateJwt, updateProfile);
router.put("/updateUsername",authenticateJwt,updateUsername)
router.delete("/deleteProfile",authenticateJwt,deleteProfile)

export default router;
