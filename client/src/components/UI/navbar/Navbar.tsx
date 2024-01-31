import { Link } from 'react-router-dom';
// import { AuthContext } from "../../../context";
import Button from '../button/Button.tsx';
// import Modal from '../modal/Modal.tsx';
// import AuthForm from "../../Forms/AuthForm";
import classes from './Navbar.module.scss';

import { navbarLinks } from '../../../utils/linkList.ts';

export default function Navbar() {
  // const [modal, setModal] = useState(false);

  // const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    // setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <nav>
      <div className={classes.nav__wrapper}>
        <div className={classes.nav__logo}></div>
        <ul className={classes.nav__list}>
          {navbarLinks.map((link) => (
            <li className={classes.nav__item} key={link.uniq}>
              <Link className={classes.nav__item__link} to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
          <li className={classes.nav__item}>
            <Button className={classes.nav__item__link} onClick={logout}>
              Кнопка
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
