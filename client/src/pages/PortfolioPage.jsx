import React from "react";
import "../styles/PortfolioPage.css";
import img from "../images/mysite.png";
import brick from "../images/brickproject.png";
import sitev3 from "../images/personsitev3.png";
import sitev2 from "../images/personsitev2.png";
import mar from "../images/marriana.png";
import obektuv from "../images/obektuv.png";
import Project from "../components/PortfolioPage/Project";

const Portfoliopage = () => {
  return (
    <div>
      <section>
        <div className="page__title">
          <h2>Список проектов</h2>
        </div>
        <div className="project__list">
          <Project
            link="https://soloproger.github.io/PersonSite-WithoutFrameWorks/"
            img={img}
            title="Сайт без фреймворков"
            body="Сайт представляет собой одну страничку с формой. Изначально это был 
            тестовый полигон для HTML/CSS, после тренировок я выложил сайт на GitGub. 
            Да, он очень прост в исполнении, но именно с помощью него я изучил основы верстки."
          />
          <Project
            link="https://github.com/SoloProger/PersonSite"
            img={sitev3}
            title="Сайт. Версия 3"
            body="Мой последний проект персонального сайта, он же и самый ленивый. 
            Я взял готовый шаблон верстки(знаю, так делать не красиво)
            и подделал его под себя. Также глупое решение - оборачивать это проект в SPA. 
            Да, сайт сделан с помощью фреймворка, конкретно - Vue.js третий версии."
          />
          <Project
            link="https://github.com/SoloProger/Site-Portfolio-Front"
            img={sitev2}
            title="Сайт. Версия 2"
            body="Сайт второй версии. Это один из трех крупных персональных сайтов(сайтов-портфолио), которые я делал.
            Сайт был самым навороченным в плане технологий, т.к именно на нём впервые я писал серверную часть на отличном от JS языке.
            Это был PHP, конечно же не в чистом виде, а с фреймворком. Сайт был сделан с душой, но как зря. Много неправильных решений в гамме
            и верстке. Но он мне нравиться."
          />
          <Project
            link="http://react.host1831397.hostland.pro/"
            img={brick}
            title="Флагман Кирпич"
            body="Первый крупный рабочий проект. Сделан на react+hooks - клиент, Python/Djnago - сервер. Я избавился от css фреймворков и верстал всё ручками,
            поэтому получилось лучше чем мои проекты. Проект получился большим и сложном, он до сих пор развивается."
          />
          <Project
            link="http://mar.host1817853.hostland.pro/"
            img={mar}
            title="Марианна"
            body="Этот и следующий проект - верстка + Wordpress. Они позволят оценить мои навыки верстки. 
            Оценить мои навыки серверного программирования по этим проктам, увы, невозможно"
          />
          <Project
            link="https://obektuv.ru/"
            img={obektuv}
            title="Объектув"
            body="Этот проект - верстка + Wordpress. Они позволят оценить мои навыки верстки. 
            Оценить мои навыки серверного программирования по этим проктам, увы, невозможно"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfoliopage;
