import type { NextFunction, Request, Response } from "express";
import categoryService from "../services/categoryService.js";
import ApiError from "../error/ApiError.js";

class CategoryController {
    async getAll(req: Request, res: Response) {
        const categories = await categoryService.getAllCategories();
        res.json({ succes: true, data: categories });
    }
    async create(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            return next(ApiError.notFound);
        }
        const createdCategory = await categoryService.createCategory(name);
        res.json({ succes: true, data: createdCategory });
    }
    async delete(req: Request, res: Response) {
        const { id } = req.body;
        const deletedCategory = await categoryService.deleteCategory(id);
        res.json({ succes: true, data: deletedCategory });
    }
}
export default new CategoryController();
