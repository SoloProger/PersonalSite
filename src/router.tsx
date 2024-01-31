import { createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import PortfolioPage from './pages/PortfolioPage.tsx';
import Content from './segments/about-page/content/Content.tsx';
import Hero from './segments/start-page/hero/Hero.tsx';
import Contacts from './segments/start-page/contacts/Contacts.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <main>
            <Hero />
            <Contacts />
          </main>
        ),
      },
      {
        path: 'about',
        element: <Content />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
    ],
  },
]);

export default router;
