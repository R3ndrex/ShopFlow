import { Router } from "express";
import userController from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.delete("/:id", userController.delete);
userRouter.get("/auth", userController.check);

export { userRouter };
