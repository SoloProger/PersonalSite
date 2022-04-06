import { Router } from "express";
import TodoController from "../Todo/TodoController";

const controller = new TodoController();

const router = Router();

/** Todo Routing */
router.get("/todo", controller.message);
// router.post("/create", controller.add);
// router.get('/all', controller.all);
// router.get('/all/:id', controller.one);
// router.delete('/:id', controller.remove);

export default router;