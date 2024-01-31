import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import router from './router.tsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// TODO раздел о предыдущих сайтов с полной или частичной их инеграцией.
// TODO раздел разработки сайта (общая информация о ходе разработки)
