import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import AuthForm from "../../AuthForm";
import classes from "./Navbar.module.css";

export default function Navbar() {
  const [modal, setModal] = useState(false);

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav>
      {isAuth ? (
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
              <Link className={classes.nav__item__link} to="/portfolio">
                Портфолио
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Link className={classes.nav__item__link} to="/todo">
                TODO
              </Link>
            </li>
            <li className={classes.nav__item}>
              <a
                href="http://localhost:3006"
                className={classes.nav__item__link}
                target="_blank"
                rel="noreferrer"
              >
                Личный кабинет
              </a>
            </li>
            <li className={classes.nav__item}>
              <Button className={classes.nav__item__link} onClick={logout}>
                Выйти
              </Button>
            </li>
          </ul>
        </div>
      ) : (
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
              <Link className={classes.nav__item__link} to="/portfolio">
                Портфолио
              </Link>
            </li>
            <li className={classes.nav__item}>
              <Button
                onClick={() => setModal(true)}
                className={classes.nav__item__link}
              >
                Войти
              </Button>
              <Modal visible={modal} setVisible={setModal}>
                <AuthForm />
              </Modal>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
