import { Router } from "express";
import TodoController from "../Todo/TodoController";

const controller = new TodoController();

const router = Router();

/** Todo Routing */
router.get("/todo", controller.message);
// router.post("/create", todoController.add);
// router.get('/all', todoController.all);
// router.get('/all/:id', todoController.one);
// router.delete('/:id', todoController.remove);

/** News Routing */
// router.post("/create", newsController.add);
// router.get('/all', newsController.all);
// router.get('/all/:id', newsController.one);
// router.delete('/:id', newsController.remove);

export default router;