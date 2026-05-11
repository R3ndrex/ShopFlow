import { Router } from "express";
import productController from "../controllers/productController.js";

const productRouter = Router();

productRouter.post("/", productController.create);
productRouter.delete("/:idSlug", productController.delete);
productRouter.get("/:page", productController.getAll);
productRouter.get("/:idSlug", productController.get);

export { productRouter };
