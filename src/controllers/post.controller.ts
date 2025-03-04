import { Request, Response } from "express";
import { handleError } from "../utils/handleError.js";
import { PostService } from "../service/post.service.js";

export class PostController {
  static async createPost(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      if (!userId) {
        res.status(400).json({ success: false, message: "User ID not found" });
        return;
      }

      const postData = { ...req.body, user_id: userId };

      const post = await PostService.createPost(postData);
      res.status(201).json({ success: true, data: post });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async getPosts(req: Request, res: Response) {
    try {
      const userId = req.query.userId ? Number(req.query.userId) : undefined;
      const posts = await PostService.getPosts(userId);
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async deletePost(req: Request, res: Response) {
    try {
      const deleted = await PostService.deletePost(Number(req.params.id));
      if (!deleted) {
        return handleError(res, new Error("Post not found"), 404);
      }
      res.status(200).json({ success: true, message: "Post deleted" });
    } catch (error) {
      handleError(res, error);
    }
  }
}
