import React from "react";
import Avatar from "../images/avatar.jpg";

export default function Main() {
  return (
    <div className="content__wrapper">
      <div className="content__text">
        <div className="content__text__header">
          <h2>Привет!</h2>
        </div>
        <div className="content__body">
          <p>
            Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
            началу программирование для меня было просто интересным занятием.
            Первые полгода я занимался изучением верстки, но уделял мало времени
            этому занятию... Позже попробовал <strong>JavaScript</strong>,
            который мне, изначально, не понравился. Через месяц после первой
            программы на <em>JS</em>, я знакомлюсь с <strong>Python</strong>,
            который становиться моим основным языком на долгих 10 месяцев. Но
            после первой работы на этом языке, я углубляюсь во Frontend, где и
            знакомлюсь с <strong>React</strong> и <strong>Vue</strong>. С тех
            пор, мой основной язык программирование <strong>JavaScript</strong>.
          </p>
        </div>
      </div>
      <figure className="content__img">
        <img src={Avatar} alt="avatar" className="avatar" />
      </figure>
    </div>
  );
}
