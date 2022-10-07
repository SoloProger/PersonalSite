import { Contact } from "../types/lists/contact";
import generate from "./generatorUnikKeys";

export const contacts: Contact[] = [
  {
    key: generate(),
    icon: "https://img.icons8.com/color/48/000000/telegram-app--v1.png",
    title: "Телеграмм",
    body: "Мой телеграмм. Можно писать в любое удобное время.",
    buttonName: "Написать",
    link: "https://t.me/Andrei_So1o"
  },
  {
    key: generate(),
    icon: "https://img.icons8.com/color/48/000000/github.png",
    title: "GitHub",
    body: "Мой GitHub-аккаунт. Там вы найдете исходный код проекта.",
    buttonName: "Посмотреть",
    link: "https://github.com/SoloProger"
  },
  {
    key: generate(),
    icon: "https://img.icons8.com/color/48/000000/linkedin.png",
    title: "LinkedIn",
    body: "Мой LinkedIn. Портфолио на иностранном языке.",
    buttonName: "Написать",
    link: "https://www.linkedin.com/in/andrei-solonnickov-767689210/"
  }
];
