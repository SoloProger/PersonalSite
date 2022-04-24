import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// TODO Архитектура. Разнести все компоненты в папки-элементы.
// TODO Разбить стили на файлы.
// TODO Сделать отдельную страницу для просмотра новостей.
// TODO Сделать раздел блог и вывести последние посты на главную страницу, вместо формы связи

/**
 * Project structure
 * 
 * Advanced Section:
 *    Four components:
 *        1.Page
 *        2.Bloc
 *        3.List/Table/Form
 *        4.Card
 * 
 * Simple section:
 *     Three components:
 *        1.Bloc
 *        2.Card
 * 
 * For example: News - it`s advanced section. There is have bloc, list and card. 
 * But, Portfolio - simple section (page and card)
 */
