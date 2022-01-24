import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../../store/api/todos";
import classes from "./Table.module.css";

const Table = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <table className={classes.app_table}>
      <thead>
        <tr className={classes.table_headers}>
          <th className={classes.headers_item}>Название </th>
          <th className={classes.headers_item}>Описание</th>
          <th className={classes.headers_item}>Статус</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.body}</td>
            <td>{todo.completed ? "Завершено" : "Незавершено"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
