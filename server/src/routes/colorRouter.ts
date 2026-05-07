import { Router } from "express";
import colorController from "../controllers/colorController.js";

const colorRouter = Router();

colorRouter.post("/", colorController.create);
colorRouter.delete("/", colorController.delete);
colorRouter.get("/", colorController.getAll);

export { colorRouter };
