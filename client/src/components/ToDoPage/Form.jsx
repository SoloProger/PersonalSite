import React, { useState } from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const Form = ({ create }) => {
  const [todo, setTodo] = useState({ title: "", body: "" });

  const addNewTodo = (event) => {
    event.preventDefault();

    const newToDo = {
      ...todo,
    };
    create(newToDo);
    setTodo({ title: "", body: "" });
  };

  return (
    <div className="todo__form">
      <form>
        <div className="todo__form__header">
          <h3>Форма добавления</h3>
        </div>
        <div className="todo__input__list">
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
              value={todo.body}
              onChange={(event) => {
                setTodo({ ...todo, body: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="content__footer">
          <Button onClick={addNewTodo}>Добавить</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
