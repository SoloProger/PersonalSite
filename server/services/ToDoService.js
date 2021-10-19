import ToDo from "../models/ToDo.js";

class ToDoService {
  async create(todo) {
    const createdTodo = await ToDo.create(todo);
    return createdTodo;
  }

  async getAll() {
    const todos = await ToDo.find();
    return todos;
  }
}


export default new ToDoService();