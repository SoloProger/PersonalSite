import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import AuthForm from "../../Forms/AuthForm";
import classes from "./Navbar.module.scss";

import { privateLinks, publicLinks } from "../../../utils/linkList";

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
          <div className={classes.nav__logo}></div>
          <ul className={classes.nav__list}>
            {privateLinks.map((link) => (
              <li className={classes.nav__item} key={link.uniq}>
                <Link className={classes.nav__item__link} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className={classes.nav__item}>
              <Button className={classes.nav__item__link} onClick={logout}>
                Выйти
              </Button>
            </li>
          </ul>
        </div>
      ) : (
        <div className={classes.nav__wrapper}>
          <div className={classes.nav__logo}></div>
          <ul className={classes.nav__list}>
            {publicLinks.map((link) => (
              <li className={classes.nav__item} key={link.uniq}>
                <Link className={classes.nav__item__link} to={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
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
