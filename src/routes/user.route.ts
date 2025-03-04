import express from "express";
import { UserController } from "../controllers/user.controller.js";
import { userSchema } from "../validators/user.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";

const userRouter = express.Router();

userRouter.post("/", validateRequest(userSchema), UserController.createUser);
userRouter.get("/", UserController.getUsers);
userRouter.get("/count", UserController.getUserCount); 
userRouter.get("/:id", UserController.getUserById); 
userRouter.post("/login", UserController.login);

export default userRouter;
