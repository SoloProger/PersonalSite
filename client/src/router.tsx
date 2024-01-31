import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import MainPage from './pages/MainPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
    ],
  },
]);

export default router;
