import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

export function handlePrismaError(req: Request, res: Response, err: any) {

  if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(400).send();
  }

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2000":
        return res.status(400).json({
          error: "Value too long",
          additionalInfo: err.meta
        });
      case "P2001":
        return res.status(404).json({
          error: "Not found",
          additionalInfo: err.meta
        })
      case "P2002":
        return res.status(409).json({
          error: "Unique constraint violation",
          additionalInfo: err.meta
        });
      default:
        return res.status(500).json({
          error: "Unknown error",
          code: err.code,
          additionalInfo: err.meta
        })
    }
  }

  console.error(err);
  return res.status(500).json({
    error: "Unknown error",
    code: err.code,
    mesasge: err.meta
  });
}
