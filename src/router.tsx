import { createBrowserRouter } from 'react-router-dom';
import StartPage from './pages/StartPage';
import App from './App.tsx';
import AboutPage from './pages/AboutPage.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <StartPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '/portfolio-page',
        element: <PortfolioPage />,
      },
    ],
  },
]);

export default router;
