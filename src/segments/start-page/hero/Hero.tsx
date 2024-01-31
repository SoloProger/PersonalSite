import { Link } from 'react-router-dom';
import Button from '../../../shared/ui/button/Button.tsx';

export default function Hero() {
  return (
    <header>
      <div className='content__wrapper'>
        <div className='content__img'>
          <figure>
            <img src='/images/author.jpg' alt='Author' />
            <figcaption>
              <em>Солонников Андрей. Автор сайта. Начинающий разработчик</em>
            </figcaption>
          </figure>
        </div>
        <div className='content__text'>
          <h2 className='content__text__header'>Добро пожаловать!</h2>
          <p className='content__text__paragraph'>
            Меня зовут Андрей, мне 19 лет. Я программирую с лета 2019 года. По
            началу программирование для меня было просто интересным занятием.
            Первые полгода я занимался изучением верстки, но уделял мало времени
            этому занятию...
          </p>
          <div className='content__footer'>
            <Button>
              <Link to='/about' className='button__link'>
                Подробнее...
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
