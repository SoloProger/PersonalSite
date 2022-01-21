import { ADD_NEWS, REMOVE_NEWS, ALL_NEWS } from "../types/newsTypes";

const defaultState = {
  news: [
    {
      id: 1,
      title: "Hello World",
      body: "Hello World",
      updated_at: "12.12.21",
    },
    {
      id: 2,
      title: "Hello World",
      body: "Hello World",
      updated_at: "12.12.21",
    },
    {
      id: 3,
      title: "Hello World",
      body: "Hello World",
      updated_at: "12.12.21",
    },
    {
      id: 4,
      title: "Hello World",
      body: "Hello World",
      updated_at: "12.12.21",
    },
  ],
};

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    case REMOVE_NEWS:
      return {
        ...state,
        news: state.news.filter((item) => item.id !== action.payload),
      };
    case ALL_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    default:
      return state;
  }
};
