import ApiError from "../error/ApiError.js";
import { prisma } from "../lib/prisma.js";

class CategoryService {
    async getAllCategories() {
        const categories = await prisma.category.findMany();
        if (categories.length <= 0) {
            throw ApiError.notFound("Colors not found");
        }
        return categories.map((category) => ({
            id: category.id,
            name: category.name,
        }));
    }
    async deleteCategory(id: string) {
        return await prisma.category.delete({
            where: {
                id,
            },
        });
    }
    async createCategory(name: string) {
        return await prisma.category.create({
            data: {
                name,
            },
        });
    }
}
export default new CategoryService();
