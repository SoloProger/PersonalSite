import React from "react";
import PropTypes from "prop-types";
import Button from "../UI/button/Button.js";

const TodoCard = ({ todo, title, description, remove, completed }) => {
  return (
    <div className="todo-card-info">
      <h4>{title}</h4>
      <p>{description}</p>
      <span>{completed ? "Выполнено" : "Не выполнено"}</span>
      <Button onClick={() => remove(todo)}>Удалить</Button>
    </div>
  );
};

TodoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  todo: PropTypes.object,
  remove: PropTypes.func
};

export default TodoCard;
