import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/", productController.create);
productRouter.delete("/", productController.delete);
productRouter.get("/", productController.getAll);
productRouter.get("/:idSlug", productController.get);

export { productRouter };
