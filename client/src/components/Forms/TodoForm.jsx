import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../UI/input/Input.js";
import Button from "../UI/button/Button.js";
import generate from "../../utils/generator.js";

const TodoForm = ({ create }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewTodo = (event) => {
    event.preventDefault();
    const todo = {
      id: generate(),
      title: title,
      description: description,
      completed: false
    };
    create(todo);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="todo-form">
      <h3>Форма добавления</h3>
      <div className="todo-inputs">
        <div>
          <Input
            type="text"
            placeholder="Введите название"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="Введите Описанание"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
      </div>
      <div className="todo-form-footer">
        <Button onClick={addNewTodo}>Добавить</Button>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  create: PropTypes.func
};

export default TodoForm;
