import { prisma } from "../lib/prisma.js";
import type { Request, Response } from "express";
class userController {
    async register(req: Request, res: Response) {
        res.json({ success: true, data: {} });
    }
    async login(req: Request, res: Response) {
        res.json({ success: true, data: {} });
    }
    async check(req: Request, res: Response) {
        res.json({ success: true, data: {} });
    }
    async delete(req: Request, res: Response) {
        res.json({ success: true, data: {} });
    }
}
export default new userController();
