import { Request, Response } from "express";
import { handleError } from "../utils/handleError.js";
import { UserService } from "../service/user.service.js";

export class UserController {
  static async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async getUsers(req: Request, res: Response) {
    try {
      const pageNumber = Number(req.query.pageNumber) || 0;
      const pageSize = Number(req.query.pageSize) || 10;
      const users = await UserService.getUsers(pageNumber, pageSize);
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async getUserCount(req: Request, res: Response) {
    try {
      const count = await UserService.getUserCount();
      res.status(200).json({ success: true, data: { count } });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(Number(req.params.id));
      if (!user) {
        return handleError(res, new Error("User not found"), 404);
      }
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      handleError(res, error);
    }
  }

  static async login (req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return handleError(res, new Error("Email and password are required"), 400);
      }
      const {token, user} = await UserService.login(email, password);
      res.status(200).json({ success: true, data: { token, user } });
    } catch (error) {
      handleError(res, error);
    }
  }

}
