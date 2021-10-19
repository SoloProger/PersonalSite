import React, { useState } from "react";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const Updateform = ({ update }) => {
  const [updatedTodo, setUpdateTodo] = useState({ title: "", body: "" });

  const updateTodo = (event) => {
    event.preventDefault();
    const updateTodo = {
      ...updatedTodo,
    };
    update(updateTodo);
    setUpdateTodo({ title: "", body: "" });
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
              value={updatedTodo.title}
              onChange={(event) => {
                setUpdateTodo({ ...updatedTodo, title: event.target.value });
              }}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Введите Описанание"
              value={updatedTodo.body}
              onChange={(event) => {
                setUpdateTodo({ ...updatedTodo, body: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="content__footer">
          <Button onClick={updateTodo}>Обновить</Button>
        </div>
      </form>
    </div>
  );
};

export default Updateform;
