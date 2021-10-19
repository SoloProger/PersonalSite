import ToDoService from "../services/ToDoService.js";

class ToDoController {
  async create(req, res) {
    try {
      const todo = await ToDoService.create(req.body);
      res.json(todo);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async getAll(req, res) {
    try {
      const todos = await ToDoService.getAll();
      return res.json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}


export default new ToDoController();