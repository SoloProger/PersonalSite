import TodoService from "../services/TodoService.js";


class TodoController {
  async addTodo(req, res) {
    try {
      const todo = await TodoService.addTodo(req.body);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(`Ошибка сервера! Контроллер не доступен: ${error}`);
    }
  }

  async getTodos(req, res) {
    try {
      const todos = await TodoService.getTodos();
      return res.json(todos);
    } catch (error) {
      res.status(500).json(`Ошибка сервера! Контроллер не доступен: ${error}`);
    }
  }

  async removeTodo(req, res) {
    try {
      const todo = await TodoService.removeTodo(req.params.id);
      return res.json(todo);
    } catch (error) {
      res.status(500).json(`Ошибка сервера! Контроллер не доступен: ${error}`);
    }
  }
}

export default new TodoController();
