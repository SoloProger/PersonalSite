import AboutPage from "../pages/AboutPage.jsx";
import Todopage from "../pages/ToDoPage.jsx";
import Portfoliopage from "../pages/PortfolioPage.jsx";
import MainPage from "../pages/MainPage.jsx";

export const privateRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/portfolio", component: Portfoliopage, exact: true },
  { path: "/todo", component: Todopage, exact: true },
];
export const publicRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/portfolio", component: Portfoliopage, exact: true },
];
