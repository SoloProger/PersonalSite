import generate from "../../utils/generator.js";
import { ADD_NEWS, REMOVE_NEWS, ALL_NEWS } from "../types/newsTypes";

const defaultState = {
  news: [
    {
      key: generate(),
      title: "hello",
      body:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      date: "12.22.2334",
      tag: "habr"
    },

    {
      key: generate(),
      title: "hello",
      body:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      date: "12.22.2334",
      tag: "habr"
    },
    {
      key: generate(),
      title: "hello",
      body:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      date: "12.22.2334",
      tag: "habr"
    }
  ]
};

export const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return { ...state, news: [...state.news, action.payload] };
    case REMOVE_NEWS:
      return {
        ...state,
        news: state.news.filter(item => item._id !== action.payload)
      };
    case ALL_NEWS:
      return { ...state, news: [...state.news, ...action.payload] };
    default:
      return state;
  }
};
