import { BlogPage } from './../pages/Blog';
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import MainPage from "../pages/MainPage";
import { CustomRoute } from "../types/routes/route";

export const privateRoutes: CustomRoute[] = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/portfolio", component: PortfolioPage, exact: true },
];
export const publicRoutes: CustomRoute[] = [
  { path: "/", component: MainPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
  { path: "/portfolio", component: PortfolioPage, exact: true },
  {path: '/blog', component: BlogPage, exact: true},
];
