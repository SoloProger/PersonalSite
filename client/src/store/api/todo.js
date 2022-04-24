import { allTodoAction } from "../actions/todoAction";
import axios from "axios";

export const fetchTodos = () => {
  return async function(dispatch) {
    axios
      .get("http://localhost:5000/ps/api/todo/all")
      .then(response => response.data)
      .catch(err => console.log(err))
      .then(data => {
        console.log(data);
        dispatch(allTodoAction(data));
      })
      .catch(err => console.log(err));
  };
};
