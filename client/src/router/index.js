import AboutPage from "../pages/AboutPage.jsx";
import LoginPage from "../pages/LoginPage";
import StartPage from "../pages/StartPage.jsx";

export const privateRoutes = [
  { path: "/", component: StartPage, exact: true },
  { path: "/about", component: AboutPage, exact: true },
];
export const publicRoutes = [{ path: "/", component: StartPage, exact: true }];
