import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
const categoryRouter = Router();

categoryRouter.post("/", categoryController.create);
categoryRouter.delete("/:id", categoryController.delete);
categoryRouter.get("/", categoryController.getAll);

export { categoryRouter };
