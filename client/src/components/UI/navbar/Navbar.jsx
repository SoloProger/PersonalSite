import React from "react";
import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={classes.nav__wrapper}>
        <a href="/" className={classes.nav__logo}>
          Andrei Solo
        </a>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <a className={classes.nav__item__link} href="sass.html">Обо_мне</a>
          </li>
          <li className={classes.nav__item}>
            <a className={classes.nav__item__link} href="badges.html">Портфолио</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
