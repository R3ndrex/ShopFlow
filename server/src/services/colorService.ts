import ApiError from "../error/ApiError.js";
import { prisma } from "../lib/prisma.js";

class ColorService {
    async getAllColors() {
        const colors = await prisma.color.findMany();
        if (colors.length <= 0) {
            throw ApiError.notFound("Colors not found");
        }
        return colors.map((color) => ({
            id: color.id,
            name: color.name,
        }));
    }
    async deleteColor(id: string) {
        return await prisma.color.delete({
            where: {
                id,
            },
        });
    }
    async createColor(name: string) {
        return await prisma.color.create({
            data: {
                name,
            },
        });
    }
}
export default new ColorService();
