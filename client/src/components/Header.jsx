import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

import Author from "../images/author.jpg";
import Button from "./UI/button/Button";
import Modal from "./UI/modal/Modal";

export default function Header() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  return (
    <header>
      <div className="content__wrapper">
        <div className="content__img">
          <figure>
            <img src={Author} alt="Author" />
            <figcaption>
              <em>Солонников Андрей. Автор сайта. Начинающий разработчик</em>
            </figcaption>
          </figure>
        </div>
        <div className="content__text">
          <h2 className="content__text__header">Добро пожаловать!</h2>
          <p className="content__text__paragraph">
            Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
            началу программирование для меня было просто интересным занятием.
            Первые полгода я занимался изучением верстки, но уделял мало времени
            этому занятию...
          </p>
          <div className="content__footer">
            {isAuth ? (
              <Button>
                <Link to="/about" className="button__link">
                  Подробнее...
                </Link>
              </Button>
            ) : (
              <div>
                <Button onClick={() => setModal(true)}>Подробнее...</Button>
                <Modal visible={modal} setVisible={setModal}>
                  Вы не авторизованы!
                </Modal>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
