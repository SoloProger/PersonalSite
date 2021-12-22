import React from "react";

export default function AboutSite() {
  return (
    <div className="modal__about">
      <div className="modal__about__title">
        <h2>Сайт. Версия: 1.0.0</h2>
      </div>
      <div className="modal__about__body">
        <p>
          Сайт был создан для демонстрационных целей. Я не преследовал цель
          сделать красивый сайт. Нет, я хотел показать, какой функционал я могу
          реализовывать в короткий срок и поделиться своими работами.
        </p>
      </div>
      <div className="modal__about__footer">
        <h4>Стек технологий:</h4>
        <strong>Frontend: </strong>
        <span>React.js</span> <br />
        <strong>Backend: </strong>
        <span>PHP/Laravel + MySQL</span>
      </div>
    </div>
  );
}
