import express from "express";
import {
  createTask,
  getUserTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/Task.controller.js";

import { protect } from "../middleware/Auth.middleware.js";
import { validate } from "../middleware/Validate.middleware.js";

import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/Task.validator.js";

const router = express.Router();

// Protect all routes
router.use(protect);

// Routes
router.post("/", validate(createTaskSchema), createTask);
router.get("/", getUserTasks);
router.get("/:id", getTaskById);
router.patch("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
