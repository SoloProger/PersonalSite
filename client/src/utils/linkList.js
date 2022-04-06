import generate from "./generator";

export const privateLinks = [
  {
    name: "Главная",
    path: "/",
    uniq: generate()
  },
  {
    name: "Обо_мне",
    path: "/about",
    uniq: generate()
  },
  {
    name: "Портфолио",
    path: "/portfolio",
    uniq: generate()
  },
  {
    name: "Todo",
    path: "/todo",
    uniq: generate()
  }
];

export const publicLinks = [
  {
    name: "Главная",
    path: "/",
    uniq: generate()
  },
  {
    name: "Обо_мне",
    path: "/about",
    uniq: generate()
  },
  {
    name: "Портфолио",
    path: "/portfolio",
    uniq: generate()
  }
];
