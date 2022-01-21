import News from "../views/News";
import NewsCreate from "../views/NewsCreate";
import NewsUpdate from "../views/NewsUpdate";
import ProjectsAdd from "../views/ProjectAdd";
import Projects from "../views/Projects";
import Todos from "../views/Todos";

export const routes = [
  { path: "/news/all", component: News, exact: true },
  { path: "/news/create", component: NewsCreate, exact: true },
  { path: "/news/update", component: NewsUpdate, exact: true },
  { path: "/projects/all", component: Projects, exact: true },
  { path: "/projects/add", component: ProjectsAdd, exact: true },
  { path: "/todos", component: Todos, exact: true },
];
