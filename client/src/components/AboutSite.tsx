export default function AboutSite() {
  return (
    <div className='modal__about'>
      <div className='modal__about__title'>
        <h2>Сайт. Версия: 1.1.0</h2>
      </div>
      <div className='modal__about__body'>
        <p>
          РЕФАКТОРИНГ
          {/* Это техно демка, которая показывает что я могу сделать за небольшой
          промежуток времени. Работа над сайтом постоянно ведеться. */}
        </p>
      </div>
      <div className='modal__about__footer'>
        <h4>Стек технологий:</h4>
        <strong>Frontend: </strong>
        <span>???</span> <br />
        <strong>Backend: </strong>
        <span>???</span>
        {/* <strong>Frontend: </strong>
        <span>React.js + Redux + Hooks</span> <br />
        <strong>Backend: </strong>
        <span>Node.js + Express + MongoDB</span> */}
      </div>
    </div>
  );
}
