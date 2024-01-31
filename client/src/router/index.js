import AboutPage from "../pages/AboutPage.tsx";
import TodoPage from "../pages/TodoPage.jsx";
import PortfolioPage from "../pages/PortfolioPage.tsx";
import MainPage from "../pages/MainPage.tsx";

export const privateRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/portfolio", component: PortfolioPage, exact: true },
  { path: "/todo", component: TodoPage, exact: true }
];
export const publicRoutes = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/portfolio", component: PortfolioPage, exact: true }
];
