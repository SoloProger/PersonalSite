export default function AboutSite() {
  return (
    <div className='modal__about'>
      <div className='modal__about__title'>
        <h2>Сайт. Версия: 1.6.0</h2>
      </div>
      <div className='modal__about__body'>
        <p>
          Сайт был создан для демонстрационных целей. Я не преследовал цель
          сделать красивый сайт. Нет, я хотел поделиться своими работами.
        </p>
      </div>
      <div className='modal__about__footer'>
        <h4>Стек технологий:</h4>
        <p>
          <strong>Frontend: </strong>React.js, React-router, Vite
        </p>
      </div>
    </div>
  );
}
