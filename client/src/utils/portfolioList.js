import generate from "./generator";
import site from "../images/mysite.png";
import brick from "../images/brickproject.png";
import sitev3 from "../images/personsitev3.png";
import sitev2 from "../images/personsitev2.png";
import build from "../images/buildingsite.png";
import mar from "../images/marriana.png";
import obektuv from "../images/obektuv.png";
import mamba from "../images/mamba.png";

export const portfolioList = [
  {
    key: generate(),
    link: "http://flagman-kirpich.ru/",
    img: brick,
    title: "Флагман Кирпич",
    isButton: true,
    description:
      "Первый крупный рабочий проект. Сделан на react+hooks - клиент, Python/Djnago - сервер. Я избавился от css фреймворков и верстал всё ручками, поэтому получилось лучше чем мои проекты. Проект получился большим и сложном, он до сих пор развивается."
  },
  {
    key: generate(),
    link: "http://marianna-cafe.ru/",
    img: mar,
    title: "Марианна",
    isButton: true,
    description:
      "Этот и следующий проект - верстка + PHP. Интернет-магазин. Сайт, где пришлось много поработать с PHP. Очень интересный получился проект."
  },
  {
    key: generate(),
    link: "https://obektuv.ru/",
    img: obektuv,
    title: "Объектув",
    isButton: true,
    description:
      "Этот проект - верстка + PHP. Сайт по предоставлению услуг фотостудии. Очень интересный получился проект. Были и сложные задачи и рутина."
  },
  {
    key: generate(),
    link: "http://flagman-kirpich.ru/",
    img: brick,
    title: "Флагман Кирпич",
    isButton: true,
    description:
      "Первый крупный рабочий проект. Сделан на react+hooks - клиент, Python/Djnago - сервер. Я избавился от css фреймворков и верстал всё ручками, поэтому получилось лучше чем мои проекты. Проект получился большим и сложном, он до сих пор развивается."
  },
  {
    key: generate(),
    link: "https://mambaroll.ru/",
    img: mamba,
    title: "Черная мамба",
    isButton: true,
    description:
      "Верстка + PHP. Сайт по предоставлению услуг по продажи суши.Очень интересный получился проект. Были и сложные задачи и рутина."
  },
  {
    key: generate(),
    link: "https://github.com/SoloProger/Vue-Shop-Frontend",
    img: build,
    title: "Сайт строительной компании",
    isButton: true,
    description:
      "Сайт строительной компании представляющий из себя лендинг обернутый в SPA, не лучшая задумка, но решение принималось исходя из возмонжного расширения проекта в будущем.На сайте имеется форма, бекенд которой написан на Python/Flask."
  },
  {
    key: generate(),
    link: "#",
    img: site,
    title: "Сайт без фреймворков",
    description:
      "Сайт представляет собой одну страничку с формой. Изначально это был тестовый полигон для HTML/CSS, после тренировок я выложил сайт на GitGub. Да, он очень прост в исполнении, но именно с помощью него я изучил основы верстки."
  },
  {
    key: generate(),
    link: "#",
    img: sitev3,
    title: "Сайт. Версия 3",
    description:
      "Мой последний проект персонального сайта, он же и самый ленивый. Я взял готовый шаблон верстки(знаю, так делать не красиво) и подделал его под себя. Также глупое решение - оборачивать это проект в SPA. Да, сайт сделан с помощью фреймворка, конкретно - Vue.js третий версии."
  },
  {
    key: generate(),
    link: "#",
    img: sitev2,
    title: "Сайт. Версия 2",
    description:
      "Сайт второй версии. Это один из трех крупных персональных сайтов(сайтов-портфолио), которые я делал. Сайт был самым навороченным в плане технологий, т.к именно на нём впервые я писал серверную часть на отличном от JS языке. Это был PHP, конечно же не в чистом виде, а с фреймворком. Сайт был сделан с душой, но как зря. Много неправильных решений в гамме и верстке. Но он мне нравиться."
  }
];
