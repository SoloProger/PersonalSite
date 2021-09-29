import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";
import Button from "./UI/button/Button";
import Modal from "./UI/modal/Modal";
import classes from "./UI/navbar/Navbar.module.css";

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
            <Button
              // className={classes.nav__item__link}
              onClick={() => setModal(true)}
            >
              Войти
            </Button>
            <Modal visible={modal} setVisible={setModal}>
              <AuthForm />
            </Modal>
          </li>
        </ul>
      </div>
    </nav>
  );
}
