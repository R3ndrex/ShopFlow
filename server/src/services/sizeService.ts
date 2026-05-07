import ApiError from "../error/ApiError.js";
import { prisma } from "../lib/prisma.js";

class SizeService {
    async getAllSizes() {
        const sizes = await prisma.size.findMany();
        if (sizes.length <= 0) {
            throw ApiError.notFound("Sizes not found");
        }
        return sizes.map((size) => ({
            id: size.id,
            name: size.name,
        }));
    }
    async deleteSize(id: string) {
        return await prisma.size.delete({
            where: {
                id,
            },
        });
    }
    async createSize(name: string) {
        return await prisma.size.create({
            data: {
                name,
            },
        });
    }
}
export default new SizeService();
