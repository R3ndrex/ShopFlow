import ApiError from "../error/ApiError.js";
import { prisma } from "../lib/prisma.js";
import { getDefaultVariant, getRating } from "../mappers/product.mapper.js";

class ProductService {
    async getAllProducts() {
        const products = await prisma.product.findMany({
            include: {
                variants: {
                    include: {
                        images: {
                            omit: {
                                variantId: true,
                            },
                        },
                    },
                },
                ratings: {
                    omit: {
                        productId: true,
                    },
                },
            },
        });
        if (products.length <= 0) {
            console.log(2);
            throw ApiError.notFound("Products not found");
        }
        return products.map((product) => {
            const defaultVariant = getDefaultVariant(product);
            const rating = getRating(product);
            return {
                id: product.id,
                images: defaultVariant?.images || [],
                price: defaultVariant?.price || 0,
                slug: product.slug,
                name: product.name,
                rating,
            };
        });
    }
    async getProduct(id: string, slug: string) {
        const product = await prisma.product.findFirst({
            where: {
                id: id,
                slug: slug,
            },
            include: {
                variants: {
                    include: {
                        color: true,
                        size: true,
                        images: {
                            omit: {
                                variantId: true,
                            },
                        },
                    },
                },
                productInfo: {
                    omit: {
                        productId: true,
                    },
                },
                category: true,
                ratings: {
                    omit: {
                        productId: true,
                    },
                },
            },
        });
        if (!product) {
            throw ApiError.notFound("Product not found");
        }
        const defaultVariant = getDefaultVariant(product);
        const rating = getRating(product);
        return {
            id: product.id,
            name: product.name,
            category: product?.category.name,
            images: defaultVariant?.images.map((i) => i.url) || [],
            price: defaultVariant?.price,
            size: defaultVariant?.size,
            color: defaultVariant?.color,
            stock: defaultVariant?.stock || 0,
            slug: product.slug,
            rating,
            description: product?.productInfo,
        };
    }
}
export default new ProductService();
