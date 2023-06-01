import { Router } from "express";
import { MyEntityController } from "../controllers/MyEntity.controller";

const router = Router();

router.get('entity/:id(\\d+)', MyEntityController.getMany);

export default router;