import { ALL_TODO } from "../types/todoTypes";

const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TODO:
      return { ...state, todos: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};
