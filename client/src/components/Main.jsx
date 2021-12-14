import React from "react";
import Avatar from "../images/avatar.jpg";
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
              Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
              началу программирование для меня было просто интересным занятием.
              Первые полгода я занимался изучением верстки, но уделял мало
              времени этому занятию... Позже попробовал{" "}
              <strong>JavaScript</strong>, который мне, изначально, не
              понравился. Через месяц после первой программы на <em>JS</em>, я
              знакомлюсь с <strong>Python</strong>, который становиться моим
              основным языком на долгих 10 месяцев. Но после первой работы на
              этом языке, я углубляюсь во Frontend, где и знакомлюсь с{" "}
              <strong>React</strong> и <strong>Vue</strong>. Последние пол года
              я очень много занимался <strong>Frontend-частью</strong> и{" "}
              <strong>JavaScript</strong> в частности. Но всё меняется...
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
            <h2>T-Shaped Специалист</h2>
          </div>
          <div className="content__body">
            <p style={{ marginBottom: "20px" }}>
              Сейчас я Backend T-Shaped-специалист. Основная сфера -
              Backend-разработка. Смежная сфера - Frontend-разработка. Но это
              только hard-skills. Про soft-skills я не буду здесь упоминать, они
              нужны любому специалисту. Теперь о каждой сфере по отдельности...
            </p>
            <Button>
              <a
                className="button__link"
                href="https://skillbox.ru/media/growth/kto_takoy_t_shaped_spetsialist/"
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
              Чтобы узнать о сфере подробно, нажмити на кнопку. Я же в этом
              блоке опишу, почему именно backend. Изначально я вообще хотел быть
              fullstack-разработчиком, но из-за сложности освоения сразу двух
              направлений разработки я отказался от этой идеи. Неудачный выбор
              заставил меня задуматься о том, что разработка и вовсе не моё, но
              позже я решил попробовать снова на этот раз в Backend, и всё
              получилось. Позже я всё же вернулся к фронтенду, но сейчас я
              развиваюсь в качестве T-Shaped разработчика с приорететом на
              Backend.
            </p>
            <Button>
              <a
                className="button__link"
                href="https://checkroi.ru/blog/professiya-bekend-razrabotchik/"
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
              Это ответление блока о Backend-разработке, в котором я рассказываю
              свой опыт во Frontend. После отказа от fullstack, я углубился во
              frontend, но и здесь так и не смогу найти себя. Было интересно
              делать запросы, работать со store, делать маршрутизацию и
              разбираться во фреймворках, но в моей работе было много вёрстки,
              которую я не люблю. Да и в принципе frontend больше подходит для
              творческих людей, коим я не являюсь. Было принято решение уйти в
              Backend. Тут то я и нашел себя.
            </p>
            <Button>
              <a
                className="button__link"
                href="https://checkroi.ru/blog/frontend-razrabotchik-podrobnyj-razbor-professii/"
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
