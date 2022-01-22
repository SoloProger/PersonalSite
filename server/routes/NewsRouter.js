import { Router } from "express";
import NewsController from "../controllers/NewsController.js";

const router = new Router();

router.post("/create", NewsController.createNews);
router.get("/all", NewsController.getAllNews);
router.delete("/:id", NewsController.removeNews);

export default router;
