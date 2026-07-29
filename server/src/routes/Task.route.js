import express from "express";
import {
  createTask,
  getUserTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/Task.controller.js";
import { protect } from "../middleware/Auth.middleware.js";
const router = express.Router();

router.use(protect);

router.post("/", createTask);
router.get("/", getUserTasks);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
