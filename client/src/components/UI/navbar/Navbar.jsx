import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "../../AuthForm";
import Modal from "../modal/Modal";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  return (
    <nav>
      <div className={classes.nav__wrapper}>
        <Link to="/" className={classes.nav__logo}>
          Andrei Solo
        </Link>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <Link className={classes.nav__item__link} to="/about">
              Обо_мне
            </Link>
          </li>
          <li className={classes.nav__item}>
            <a className={classes.nav__item__link} href="badges.html">
              Портфолио
            </a>
          </li>
          <li className={classes.nav__item}>
            <a
              className={classes.nav__item__link}
              onClick={() => setModal(true)}
              href
            >
              Войти
            </a>
            <Modal visible={modal} setVisible={setModal}>
              <AuthForm/>
            </Modal>
          </li>
        </ul>
      </div>
    </nav>
  );
}
