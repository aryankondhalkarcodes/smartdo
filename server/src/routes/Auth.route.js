import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/Auth.controller.js";
import { protect } from "../middleware/Auth.middleware.js";

export const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected route
router.post("/logout", protect, logoutUser);

export default router;
