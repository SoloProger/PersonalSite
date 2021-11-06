import React from "react";
import Button from "../components/UI/button/Button";
import "../styles/PortfolioPage.css";
import img from "../images/author.jpg";

const Portfoliopage = () => {
  return (
    <div>
      <section>
        <div className="page__title">
          <h2>Список проектов</h2>
        </div>
        {/* TODO Сделать декомпозицию, изменить контент и добавить изображения проектов */}
        <div className="project__list">
          {/* Card */}
          <div className="content__wrapper">
            <div className="content__img">
              <img src={img} alt="Изображение" class="avatar" />
            </div>
            <div className="content_text project">
              <div className="content__text__header">
                <h3>Мой сайт</h3>
              </div>
              <div className="content__body project__body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  minus, rem consectetur delectus commodi fuga molestiae sit
                  voluptatibus quia dolorum neque atque consequuntur
                  exercitationem tenetur ipsam quo tempore vel? Alias saepe eos
                  illum. Voluptatibus provident perferendis odit distinctio
                  quibusdam cumque perspiciatis veritatis consectetur inventore
                  nisi voluptate doloribus alias, est repudiandae!
                </p>
              </div>
              <div className="content__footer">
                <Button>
                  <a href="#" className="button__link">Ознакомиться</a>
                </Button>
              </div>
            </div>
          </div>
          {/* End card */}
           {/* Card */}
           <div className="content__wrapper">
            <div className="content__img">
              <img src={img} alt="Изображение" class="avatar" />
            </div>
            <div className="content_text project">
              <div className="content__text__header">
                <h3>Мой сайт</h3>
              </div>
              <div className="content__body project__body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  minus, rem consectetur delectus commodi fuga molestiae sit
                  voluptatibus quia dolorum neque atque consequuntur
                  exercitationem tenetur ipsam quo tempore vel? Alias saepe eos
                  illum. Voluptatibus provident perferendis odit distinctio
                  quibusdam cumque perspiciatis veritatis consectetur inventore
                  nisi voluptate doloribus alias, est repudiandae!
                </p>
              </div>
              <div className="content__footer">
                <Button>
                  <a href="#" className="button__link">Ознакомиться</a>
                </Button>
              </div>
            </div>
          </div>
          {/* End card */}
           {/* Card */}
           <div className="content__wrapper">
            <div className="content__img">
              <img src={img} alt="Изображение" class="avatar" />
            </div>
            <div className="content_text project">
              <div className="content__text__header">
                <h3>Мой сайт</h3>
              </div>
              <div className="content__body project__body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  minus, rem consectetur delectus commodi fuga molestiae sit
                  voluptatibus quia dolorum neque atque consequuntur
                  exercitationem tenetur ipsam quo tempore vel? Alias saepe eos
                  illum. Voluptatibus provident perferendis odit distinctio
                  quibusdam cumque perspiciatis veritatis consectetur inventore
                  nisi voluptate doloribus alias, est repudiandae!
                </p>
              </div>
              <div className="content__footer">
                <Button>
                  <a href="#" className="button__link">Ознакомиться</a>
                </Button>
              </div>
            </div>
          </div>
          {/* End card */}
        </div>
      </section>
    </div>
  );
};

export default Portfoliopage;
