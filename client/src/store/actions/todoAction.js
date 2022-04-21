import { ADD_TODO, ALL_TODO, REMOVE_TODO } from "../types/todoTypes";

export const addTodoAction = payload => ({ type: ADD_TODO, payload });
export const removeTodoAction = payload => ({ type: REMOVE_TODO, payload });
export const allTodoAction = payload => ({ type: ALL_TODO, payload });
