import { Router } from "express";
import TodoController from "../controllers/TodoController.js";

const router = new Router();

router.post("/add", TodoController.addTodo);
router.get("/all", TodoController.getTodos);
router.delete("/:id", TodoController.removeTodo);

export default router;
