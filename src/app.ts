import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import userRouter from "./routes/user.route.js";
import addressRouter from "./routes/address.route.js";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/addresses", addressRouter);
app.use("/posts", postRouter);

app.use(errorHandler);

export default app;