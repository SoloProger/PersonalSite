import { ADD_NEWS, REMOVE_NEWS, ALL_NEWS } from "../types/newsTypes";

export const addNewsAction = (payload) => ({ type: ADD_NEWS, payload });
export const removeNewsAction = (payload) => ({ type: REMOVE_NEWS, payload });
export const allNewsAction = (payload) => ({ type: ALL_NEWS, payload });
