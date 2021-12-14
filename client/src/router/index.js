import AboutPage from "../pages/AboutPage.jsx";
import StartPage from "../pages/StartPage.jsx";
import Todopage from "../pages/ToDoPage.jsx";
import Portfoliopage from "../pages/PortfolioPage.jsx";

export const privateRoutes = [
  { path: "/", component: StartPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/todo", component: Todopage, exact: true },
  { path: "/portfolio", component: Portfoliopage, exact: true },
];
export const publicRoutes = [{ path: "/", component: StartPage, exact: true }];
