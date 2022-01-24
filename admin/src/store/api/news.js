import {
  addNewsAction,
  allNewsAction,
  removeNewsAction,
} from "../actions/newsActions";
import axios from "axios";

export const addNews = (newNews) => {
  return function (dispatch) {
    axios
      .post("http://localhost:5000/news/create", newNews)
      .then((response) => response.data)
      .then((data) => dispatch(addNewsAction(data)));
  };
};

export const fetchNews = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/news/all")
      .then((response) => response.data)
      .then((data) => dispatch(allNewsAction(data)));
  };
};

export const removeNews = (news) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:5000/news/${news._id}`)
      .then((response) => response.data)
      .then((data) => dispatch(removeNewsAction(data._id)));
  };
};
