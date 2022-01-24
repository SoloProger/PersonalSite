import { ADD_NEWS, REMOVE_NEWS, ALL_NEWS } from "../types/newsTypes";

const defaultState = {
  news: [],
};

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    case REMOVE_NEWS:
      return {
        ...state,
        news: state.news.filter((item) => item._id !== action.payload),
      };
    case ALL_NEWS:
      return { ...state, news: [...state.news, ...action.payload] };
    default:
      return state;
  }
};
