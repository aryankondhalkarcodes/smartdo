import { z } from "zod";

// Create task validation
export const createTaskSchema = z.object({
  title: z
    .string()
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .max(1000, "Description cannot exceed 1000 characters")
    .optional(),

  status: z.enum(["pending", "in-progress", "completed"]).optional(),

  priority: z.enum(["low", "medium", "high"]).optional(),

  dueDate: z.string().datetime().optional(),
});

// Update (partial)
export const updateTaskSchema = createTaskSchema.partial();
