import { Link } from 'react-router-dom';
import getAge from '../../utils/getMyAge.ts';
import Button from '../UI/button/Button.tsx';

export default function Header() {
  return (
    <header>
      <div className='header-wrapper'>
        <div className='header-img'>
          <figure>
            <img src='/images/author.jpg' alt='Author' />
            <figcaption>
              <em>Солонников Андрей. Автор сайта. JavaScript-разработчик</em>
            </figcaption>
          </figure>
        </div>
        <div className='header-text'>
          <p>
            Меня зовут Андрей, мне {getAge()} лет. Я разработчик на языках
            JavaScript/TypeScript. Разрабатывл CRM/ERP системы, e-commerce и
            личные кабинеты. Работал с такими технологиями, как Node.js,
            React.js, Vue.js, MySQL, MongoDB, Express, Nest.js.
          </p>
          <div className='header-footer'>
            <Button>
              <Link to='/about' className='button-link'>
                Узнать больше
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
