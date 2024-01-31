import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav>
      <div className={classes.nav__wrapper}>
        <Link to='/' className={classes.nav__logo}>
          Andrei Solo
        </Link>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <Link className={classes.nav__item__link} to='/about'>
              Обо_мне
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link className={classes.nav__item__link} to='/portfolio'>
              Портфолио
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
