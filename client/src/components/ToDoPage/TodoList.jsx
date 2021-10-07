import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Todo from "./Todo";

const Todolist = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id}/>
      ))}
    </div>
  );
};

export default Todolist;
