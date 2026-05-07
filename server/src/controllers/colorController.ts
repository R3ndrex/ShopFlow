import ApiError from "../error/ApiError.js";
import type { NextFunction, Request, Response } from "express";
import colorService from "../services/colorService.js";

class ColorController {
    async getAll(_: Request, res: Response) {
        const colors = await colorService.getAllColors();
        return res.json({ success: true, data: colors });
    }
    async create(req: Request, res: Response, next: NextFunction) {
        const { name } = req.body;
        if (!name) {
            return next(ApiError.notFound);
        }
        const createdColor = await colorService.createColor(name);
        return res.json({ success: true, data: createdColor });
    }
    async delete(req: Request, res: Response) {
        const { id } = req.body;
        const deletedColor = await colorService.deleteColor(id);
        return res.json({ success: true, data: deletedColor });
    }
}
export default new ColorController();
