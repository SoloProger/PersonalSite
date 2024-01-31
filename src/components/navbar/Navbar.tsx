import { Link } from 'react-router-dom';
import Button from '../../shared/ui/button/Button.tsx';
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
          <li className={classes.nav__item}>
            <Link className={classes.nav__item__link} to='/todo'>
              TODO
            </Link>
          </li>
          <li className={classes.nav__item}>
            <a
              href='http://127.0.0.1:8000/admin'
              className={classes.nav__item__link}
              target='_blank'
              rel='noreferrer'
            >
              Личный кабинет
            </a>
          </li>
          <li className={classes.nav__item}>
            <Button className={classes.nav__item__link}>Выйти</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
