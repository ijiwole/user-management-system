import db from "../config/database.js";
import { Post } from "../models/post.model.js";

export class PostService {
  static async createPost(postData: Partial<Post>) {
    return db("posts").insert(postData).returning("*");
  }

  static async getPosts(userId?: number) {
    let query = db("posts").select("*");
    if (userId) {
      query = query.where({ user_id: userId });
    }
    return query;
  }

  static async deletePost(id: number) {
    return db("posts").where({ id }).del();
  }
}
