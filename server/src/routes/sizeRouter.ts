import { Router } from "express";
import sizeController from "../controllers/sizeController.js";

const sizeRouter = Router();

sizeRouter.post("/", sizeController.create);
sizeRouter.delete("/:id", sizeController.delete);
sizeRouter.get("/", sizeController.getAll);

export { sizeRouter };
