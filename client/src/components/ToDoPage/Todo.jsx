import React from "react";
import Button from "../UI/button/Button";

const Todo = (props) => {


  return (
    <div className="todo__card">
      <div className="todo__card__inner">
        <div className="todo__card__info">
          <div className="todo__card__title">
            <h4>{props.todo.title}</h4>
          </div>
          <div className="todo__card__body">
            <p>{props.todo.body}</p>
          </div>
        </div>
        <div>
          <Button onClick={() => props.remove(props.todo)}>Удалить</Button>
        </div>
        <div>
          <Button onClick={() => props.update(props.todo)}>Обновить</Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
