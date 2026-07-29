import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/Auth.controller.js";

import { protect } from "../middleware/Auth.middleware.js";
import { validate } from "../middleware/Validate.middleware.js";

import { registerSchema, loginSchema } from "../validators/Auth.validation.js";

const router = express.Router();

// Public routes
router.post("/register", validate(registerSchema), registerUser);
router.post("/login", validate(loginSchema), loginUser);

// Protected route
router.post("/logout", protect, logoutUser);

export default router;
