import Todo from "../models/Todo.js";

class TodoService {
  async addTodo(todo) {
    try {
      const addedTodo = await Todo.create({ ...todo });
      return addedTodo;
    } catch (error) {
      throw new Error(`Ошибка сервера! Сервис не доступен. ${error}`);
    }
  }

  async getTodos() {
    try {
      const todos = Todo.find();
      return todos;
    } catch (error) {
      throw new Error(`Ошибка сервера! Сервис не доступен. ${error}`);
    }
  }

  async removeTodo(id) {
    try {
      if (!id) {
        throw new Error("Ошибка сервера! Не указан id!");
      }
      const todo = await Todo.findByIdAndDelete(id);
      return todo;
    } catch (error) {
      throw new Error(`Ошибка сервера! Сервис не доступен. ${error}`);
    }
  }
}

export default new TodoService();
