import generate from "../../utils/generator.js";
import { ADD_TODO, ALL_TODO, REMOVE_TODO } from "../types/todoTypes";

const defaultState = {
  todos: [
    // { id: generate(), title: "hello", description: "hello", completed: true },
    // { id: generate(), title: "hello", description: "hello", completed: true },
    // { id: generate(), title: "hello", description: "hello", completed: true }
  ]
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todos.filter(item => item.id !== action.payload)
      };
    case ALL_TODO:
      return { ...state, todo: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};
