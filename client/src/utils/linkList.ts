import { Link } from "../types/utils/link";
import generate from "./generatorUnikKeys";

export const privateLinks: Link[] = [
  {
    name: "Главная",
    path: "/",
    uniq: generate(),
  },
  {
    name: "Обо_мне",
    path: "/about",
    uniq: generate(),
  },
  {
    name: "Портфолио",
    path: "/portfolio",
    uniq: generate(),
  },
  {
    name: "Todo",
    path: "/todo",
    uniq: generate(),
  },
];

export const publicLinks: Link[] = [
  {
    name: "Главная",
    path: "/",
    uniq: generate(),
  },
  {
    name: "Обо_мне",
    path: "/about",
    uniq: generate(),
  },
  {
    name: "Портфолио",
    path: "/portfolio",
    uniq: generate(),
  },
  {
    name: "Блог",
    path: "/blog",
    uniq: generate(),
  },
];
