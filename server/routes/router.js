
import  Router  from "express";
import ToDoController from "../controllers/TodoController.js"
const router = new Router();


router.post("/create", ToDoController.create);
router.get("/all", ToDoController.getAll);
router.put("/update/:id", ToDoController.update);
router.delete("/delete/:id", ToDoController.delete);

export default router;