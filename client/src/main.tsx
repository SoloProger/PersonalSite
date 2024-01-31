import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.scss';
import router from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
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
 * For example: News - it`s advanced section. There is had bloc, list and card.
 * But, Portfolio - simple section (page and card)
 */
