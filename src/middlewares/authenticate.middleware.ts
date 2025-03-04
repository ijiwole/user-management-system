import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ success: false, message: "Access Denied" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ success: false, message: "Invalid token" });
  }
}
