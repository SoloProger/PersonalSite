import getAge from "./getMyAge";

export const aboutCardList = [
  {
    title: "Обо мне",
    description: `Меня зовут Андрей, мне ${getAge()} лет. Я программирую с лета 2019
        года. По началу программирование для меня было просто интересным
        занятием. Первые полгода я занимался изучением верстки, но уделял мало
        времени этому занятию... Позже попробовал JavaScript,
        который мне, изначально, не понравился. Через месяц после первой
        программы на JS, я знакомлюсь с Python,
        который становиться моим основным языком на долгих 10 месяцев. Но
        после первой работы на этом языке, я углубляюсь во Frontend, где и
        знакомлюсь с React, а позже с Vue.`,
    buttonLink: "",
    buttonTitle: "",
    isButton: false
  },
  {
    title: "JavaScript-Разработчик",
    description: `Сейчас я Frontend разработчик на React. Основная сфера - Frontend. Смежная сфера - Backend-разработка. Но это только hard-skills. Про soft-skills я не буду здесь упоминать, они нужны любому специалисту. Теперь о каждой сфере по отдельности...`,
    buttonLink:
      "https://skillbox.ru/media/growth/kto_takoy_t_shaped_spetsialist/",
    buttonTitle: "Кто такой T-Shaped Специалист ?",
    isButton: true
  },
  {
    title: "Backend-Разработчик",
    description: ` (Чтобы узнать о сфере подробно, нажмити на кнопку) Мне нравиться
    backend, но только в рамках JavaScript. Я программировал и на
    других языках, например на PHP и Python. Пробовал Go, Java и
    Kotlin. Но Node.js в моем сердце. Классно писать код на одном
    языке. Не сказал бы, что я глубоко знаю back. Нет, напротив, знаю
    очень поверхностно. Могу написать не сложную часть для сайта,
    смогу на кодить чат, ну и пару других вещей.`,
    buttonLink: "https://checkroi.ru/blog/professiya-bekend-razrabotchik/",
    buttonTitle: "Кто такой Backend Разработчик ?",
    isButton: true
  },
  {
    title: "Frontend-Разработчик",
    description: `(Чтобы узнать о сфере подробно, нажмити на кнопку). Я нашел себя
    здесь. Изначально я не понимал, как вообще покраска кнопочек может
    кому-то нравиться? Душа требовала кода, сложной логике, построение
    архитектуры. Углблясь в сферу, я всё больше понимал, насколько был
    не прав. Front - очень сложен, чего стоят только анимации, а
    работа с большими формами. И всё это я уже узнал на практике.
    Сейчас и backend и frontend одинаковы по сложности.`,
    buttonLink:
      "https://checkroi.ru/blog/frontend-razrabotchik-podrobnyj-razbor-professii/",
    buttonTitle: "Кто такой Frontend Разработчик ?",
    isButton: true
  }
];
