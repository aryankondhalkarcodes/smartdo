import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/Auth.route.js";
import taskRouter from "./routes/Task.route.js";

export const app = express();
app.use(helmet());
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", authRouter);
app.use("/api/tasks", taskRouter);
