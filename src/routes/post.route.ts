import express from "express";
import { PostController } from "../controllers/post.controller.js";
import { postSchema } from "../validators/post.validator.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import { authenticate } from "../middlewares/authenticate.middleware.js";

const postRouter = express.Router();

postRouter.get("/", PostController.getPosts);
postRouter.post("/", authenticate, validateRequest(postSchema), PostController.createPost);
postRouter.delete("/:id", PostController.deletePost);

export default postRouter;
