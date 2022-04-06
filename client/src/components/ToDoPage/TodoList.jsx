import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, remove }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} remove={remove}/>
      ))}
    </div>
  );
};

export default Todolist;
