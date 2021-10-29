import Router from "express";
import PostController from "../controllers/PostController.js";
import ToDoController from "../controllers/TodoController.js";
const router = new Router();

// Todo routes
router.post("/create", ToDoController.create);
router.get("/all", ToDoController.getAll);
router.put("/update/:id", ToDoController.update);
router.delete("/delete/:id", ToDoController.delete);

export default router;
