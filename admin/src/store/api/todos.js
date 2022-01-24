import { allTodoAction } from "../actions/todoActions";
import axios from "axios";

export const fetchTodos = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/todo/all")
      .then((response) => response.data)
      .then((data) => dispatch(allTodoAction(data)));
  };
};
