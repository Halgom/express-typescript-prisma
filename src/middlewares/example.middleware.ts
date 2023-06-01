import { NextFunction, Request, Response } from "express";

export function exampleMiddleware(req: Request, res: Response, next: NextFunction) {
  return next();
}
