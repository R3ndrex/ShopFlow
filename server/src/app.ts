import express from "express";
import cors from "cors";
import { indexRouter } from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import ApiError from "./error/ApiError.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", indexRouter);

app.use((req, res, next) => {
    next(ApiError.notFound("Not found"));
});

app.use(errorHandler);

export default app;
