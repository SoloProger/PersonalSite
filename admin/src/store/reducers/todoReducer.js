import { ALL_TODO } from "../types/todoTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Hello",
      body: "world",
      updated_at: "12.12.21",
      completed: false,
    },
    {
      id: 1,
      title: "Hello",
      body: "world",
      updated_at: "12.12.21",
      completed: true,
    },
    {
      id: 1,
      title: "Hello",
      body: "world",
      updated_at: "12.12.21",
      completed: true,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TODO:
      return { ...state, todos: [...state.todos, ...action.payload] };
    default:
      return state;
  }
};
