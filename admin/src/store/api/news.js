import { allNewsAction } from "../actions/newsActions";
import axios from "axios";

export const fetchNews = () => {
  return function (dispatch) {
    axios
      .get("http://127.0.0.1:8000/api/news")
      .then((response) => response.data)
      .then((data) => dispatch(allNewsAction(data)));
  };
};
