import React from "react";
import Navbar from "./UI/navbar/Navbar";
import Author from "../images/author.jpg";
import Button from "./UI/button/Button";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="intro__wrapper">
        <div className="intro__text">
          <h2 className="intro__text__header">Добро пожаловать!</h2>
          <p className="intro__text__paragraph">
            Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
            началу программирование для меня было просто интересным занятием.
            Первые полгода я занимался изучением верстки, но уделял мало времени
            этому занятию. Позже попробовал <strong>JavaScript</strong>, который
            мне, изначально, не понравился. Через месяц после первой программы
            на <em>JS</em>, я знакомлюсь с <strong>Python</strong>, который
            становиться моим основным языком на долгих 10 месяцев. Но после
            первой работы на этом языке, я углубляюсь во Frontend, где и
            знакомлюсь с <strong>React</strong> и <strong>Vue</strong>. С тех
            пор, мой основной язык программирование <strong>JavaScript</strong>.
          </p>
        </div>
        <div className="intro__img">
            <figure>
                <img src={Author} alt="Author" />
                <figcaption><em>Солонников Андрей. Автор сайта. Начинающий разработчик</em></figcaption>
            </figure>
        </div>
        <div className="intro__footer">
            <Button>Подробнее...</Button>
        </div>
      </div>
    </header>
  );
}
