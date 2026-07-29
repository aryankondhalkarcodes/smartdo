import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(helmet());
app.use(cors());
app.use(cookieParser());

export default app;
