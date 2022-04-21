import React from "react";
import TodoCard from "../Cards/TodoCard";

const TodoList = ({ todos, remove }) => {
  return (
    <div className="todo-card">
      <div className="todo-card-title">
        <h2>Заголовок</h2>
        <h2>Описание</h2>
        <h2>Статус</h2>
        <h2>Действие</h2>
      </div>
      {todos.map((todo) => (
        <TodoCard
          todo={todo}
          title={todo.title}
          description={todo.description}
          completed={todo.completed}
          key={todo.id}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default TodoList;
