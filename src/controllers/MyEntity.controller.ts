import { Request, Response } from "express";
import prisma from "../prisma.client";
import { handlePrismaError } from "../services/prismaError.service";
import { Controller } from "./controller";

export class MyEntityController extends Controller {
  static async getMany(req: Request, res: Response) {
    let result;
    try {
      result = await prisma.myEntity.findMany();
    }
    catch (err) {
      return handlePrismaError(req, res, err);
    }
    return res.json(result);
  }
}
