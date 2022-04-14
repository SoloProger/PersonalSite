import React, { useState } from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const TodoForm = ({ create }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });

  const addNewTodo = (event) => {
    event.preventDefault();

    const newToDo = {
      ...todo
    };
    create(newToDo);
    setTodo({ title: "", description: "" });
  };

  return (
    <form className="todo-form">
      <h3>Форма добавления</h3>
      <div className="todo-inputs">
        <div>
          <Input
            type="text"
            placeholder="Введите название"
            value={todo.title}
            onChange={(event) => {
              setTodo({ ...todo, title: event.target.value });
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Введите Описанание"
            value={todo.description}
            onChange={(event) => {
              setTodo({ ...todo, description: event.target.value });
            }}
          />
        </div>
      </div>
      <div className="todo-form-footer">
        <Button onClick={addNewTodo}>Добавить</Button>
      </div>
    </form>
  );
};

export default TodoForm;
