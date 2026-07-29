import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import authRouter from "./routes/Auth.route.js";
import taskRouter from "./routes/Task.route.js";

export const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correct limiter setup
const limiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  limit: 100,
  message: {
    success: false,
    message: "Too many requests, try again later",
  },
});

// Apply globally
app.use(limiter);

// Routes
app.use("/api/users", authRouter);
app.use("/api/tasks", taskRouter);
