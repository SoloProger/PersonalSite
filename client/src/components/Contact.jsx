import React from "react";
import Card from "./Card";

export default function Contact() {
  return (
    <div className="contact__wrapper">
      <div className="contact__header">
        <h2>Контакты</h2>
      </div>
      <hr />
      <div className="card__wrapper">
        <Card
          icon="https://img.icons8.com/color/48/000000/telegram-app--v1.png"
          title="Телеграмм"
          body="Мой телеграмм. Можно писать в любое удобное время."
          button="Написать"
        />
        <Card
          icon="https://img.icons8.com/color/48/000000/github.png"
          title="GitHub"
          body="Мой GitHub-аккаунт. Там вы найдете исходный код проекта."
          button="Написать"
        />
        <Card
          icon="https://img.icons8.com/color/48/000000/linkedin.png"
          title="LinkedIn"
          body="Мой LinkedIn. Портфолио на иностранном языке."
          button="Посмотреть"
        />
      </div>
    </div>
  );
}
