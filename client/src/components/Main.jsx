import React from "react";
import Avatar from "../images/avatar.jpg";
import getAge from "../utils/getMyAge";
import Button from "./UI/button/Button.jsx";

export default function Main() {
  return (
    <div>
      <div className="content__wrapper">
        <div className="content__text">
          <div className="content__text__header">
            <h2>Привет!</h2>
          </div>
          <div className="content__body">
            <p>
              Меня зовут Андрей, мне {getAge()} лет. Я программирую с лета 2019
              года. По началу программирование для меня было просто интересным
              занятием. Первые полгода я занимался изучением верстки, но уделял
              мало времени этому занятию... Позже попробовал{" "}
              <strong>JavaScript</strong>, который мне, изначально, не
              понравился. Через месяц после первой программы на <em>JS</em>, я
              знакомлюсь с <strong>Python</strong>, который становиться моим
              основным языком на долгих 10 месяцев. Но после первой работы на
              этом языке, я углубляюсь во Frontend, где и знакомлюсь с{" "}
              <strong>React</strong>, а позже с <strong>Vue</strong>.
            </p>
          </div>
        </div>
        <figure className="content__img">
          <img src={Avatar} alt="avatar" className="avatar" />
        </figure>
      </div>
      <div className="content__wrapper">
        <div className="content__text">
          <div className="content__text__header">
            <h2>JavaScript-Разработчик</h2>
          </div>
          <div className="content__body">
            <p style={{ marginBottom: "20px" }}>
              Сейчас я Frontend разработчик на React. Основная сфера - Frontend.
              Смежная сфера - Backend-разработка. Но это только hard-skills. Про
              soft-skills я не буду здесь упоминать, они нужны любому
              специалисту. Теперь о каждой сфере по отдельности...
            </p>
            <Button>
              <a
                className="button__link"
                href="https://skillbox.ru/media/growth/kto_takoy_t_shaped_spetsialist/"
                target="_blank"
                rel="noreferrer"
              >
                Кто такой T-Shaped Специалист ?
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="content__wrapper">
        <div className="content__text">
          <div className="content__text__header">
            <h2>Backend-Разработчик</h2>
          </div>
          <div className="content__body">
            <p style={{ marginBottom: "20px" }}>
              (Чтобы узнать о сфере подробно, нажмити на кнопку) Мне нравиться
              backend, но только в рамках JavaScript. Я программировал и на
              других языках, например на PHP и Python. Пробовал Go, Java и
              Kotlin. Но Node.js в моем сердце. Классно писать код на одном
              языке. Не сказал бы, что я глубоко знаю back. Нет, напротив, знаю
              очень поверхностно. Могу написать не сложную часть для сайта,
              смогу на кодить чат, ну и пару других вещей.
            </p>
            <Button>
              <a
                className="button__link"
                href="https://checkroi.ru/blog/professiya-bekend-razrabotchik/"
                target="_blank"
                rel="noreferrer"
              >
                Кто такой Backend Разработчик ?
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="content__wrapper">
        <div className="content__text">
          <div className="content__text__header">
            <h2>Frontend-Разработчик</h2>
          </div>
          <div className="content__body">
            <p style={{ marginBottom: "20px" }}>
              (Чтобы узнать о сфере подробно, нажмити на кнопку). Я нашел себя
              здесь. Изначально я не понимал, как вообще покраска кнопочек может
              кому-то нравиться? Душа требовала кода, сложной логике, построение
              архитектуры. Углблясь в сферу, я всё больше понимал, насколько был
              не прав. Front - очень сложен, чего стоят только анимации, а
              работа с большими формами. И всё это я уже узнал на практике.
              Сейчас и backend и frontend одинаковы по сложности.
            </p>
            <Button>
              <a
                className="button__link"
                href="https://checkroi.ru/blog/frontend-razrabotchik-podrobnyj-razbor-professii/"
                target="_blank"
                rel="noreferrer"
              >
                Кто такой Frontend Разработчик ?
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
