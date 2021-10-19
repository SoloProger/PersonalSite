
import  Router  from "express";
import ToDoController from "../controllers/TodoController.js"
const router = new Router();


router.post("/create", ToDoController.create);
router.get("/all", ToDoController.getAll);

export default router;