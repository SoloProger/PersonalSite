import generate from "../../utils/generator";
import { ADD_TODO, ALL_TODO, REMOVE_TODO } from "../types/todoTypes";

const initialState = {
  todo: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todo: [...state.todo, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter(item => item.id !== action.payload)
      };
    case ALL_TODO:
      return { ...state, todo: [...state.todo, ...action.payload] };
    default:
      return state;
  }
};
