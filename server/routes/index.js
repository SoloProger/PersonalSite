import { Router } from "express";
import NewsRouter from "./NewsRouter.js";
// import TodoRouter from "./TodoRouter.js";

const router = new Router();

router.use("/news", NewsRouter);
// router.use("/todo", TodoRouter);

export default router;
