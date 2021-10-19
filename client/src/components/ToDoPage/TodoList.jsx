import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Todo from "./Todo";

const Todolist = ({ todos, remove, update }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} remove={remove} update={update}/>
      ))}
    </div>
  );
};

export default Todolist;
