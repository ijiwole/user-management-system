import { Response } from "express";

export function handleError(res: Response, error: unknown, statusCode: number = 500) {
  const message = error instanceof Error ? error.message : "An unknown error occurred";
  res.status(statusCode).json({ success: false, message });
}
