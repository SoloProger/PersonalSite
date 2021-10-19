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


  async update(todo){
    if(!todo._id){
      throw new Error("Не указан id!");
    }
    const updatedTodo = await ToDo.findByIdAndUpdate(todo._id, todo, {new: true});
    return updatedTodo;
  }

  async delete(id){
    if(!id){
      throw new Error("Не указан id!")
    }
    const todo = await ToDo.findByIdAndDelete(id);
    return todo;
  }
}


export default new ToDoService();