import express from "express";

const app = express();

app.use(express.json());

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

export { app };
