import React from "react";
import Button from "../UI/button/Button";
import { Portfolio } from "../../types/utils/portfolio";

const PortfolioCard = ({ img, title, description, link, isButton }: Portfolio) => {
  return (
    <div className="portfolio-card-wrapper">
      <img src={img} alt="Изображение" />
      <div className="portfolio-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {isButton ? (
          <Button>
            <a
              href={link}
              className="button__link"
              target="_blank"
              rel="noreferrer"
            >
              Подробнее
            </a>
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};


export default PortfolioCard;
