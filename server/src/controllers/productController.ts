import ApiError from "../error/ApiError.js";
import type { NextFunction, Request, Response } from "express";
import productService from "../services/productService.js";

const UUIDLENGTH = 36;

class ProductController {
    async get(req: Request, res: Response, next: NextFunction) {
        const { idSlug } = req.params;
        const id = String(idSlug)?.slice(0, UUIDLENGTH);
        const slug = String(idSlug)?.slice(UUIDLENGTH + 1);
        if (!id || !slug) {
            return next(ApiError.notFound("Id or slug in not defined"));
        }
        const product = await productService.getProduct(id, slug);
        return res.json({
            success: true,
            data: product,
        });
    }
    async create(req: Request, res: Response) {
        const { name, slug, variants, categoryId, productInfo } = req.body;
        if (
            !name ||
            !slug ||
            variants?.length <= 0 ||
            !categoryId ||
            productInfo?.length <= 0
        ) {
            throw ApiError.badRequest(
                "Name and slug and variants and category and product info must be specified",
            );
        }
        const createdProduct = await productService.createProduct({
            name,
            slug,
            variants,
            categoryId,
            productInfo,
        });
        return res.json({ success: true, data: createdProduct });
    }
    async getAll(_: Request, res: Response) {
        const products = await productService.getAllProducts();
        return res.json({ success: true, data: products });
    }
    async delete(req: Request, res: Response, next: NextFunction) {
        const { idSlug } = req.params;
        const id = String(idSlug)?.slice(0, UUIDLENGTH);
        const slug = String(idSlug)?.slice(UUIDLENGTH + 1);
        if (!id || !slug) {
            return next(ApiError.notFound("Id or slug in not defined"));
        }
        const deletedProduct = await productService.deleteProduct(id, slug);
        return res.json({ success: true, data: deletedProduct });
    }
}
export default new ProductController();
