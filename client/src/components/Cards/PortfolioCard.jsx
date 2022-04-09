import React from "react";
import Button from "../UI/button/Button";
import PropTypes from "prop-types";

const PortfolioCard = ({ img, title, description, link, isButton }) => {
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

PortfolioCard.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  isButton: PropTypes.bool
};

export default PortfolioCard;
