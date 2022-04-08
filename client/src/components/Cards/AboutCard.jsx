import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/button/Button";

const AboutCard = ({
  title,
  description,
  buttonLink,
  buttonTitle,
  isButton
}) => {
  // Если у компонента есть кнопка, то true, если нет то false
  const [button, setButton] = useState(isButton);

  return (
    <div className="about-card-wrapper">
      <div className="about-card-text">
        <h2>{title}</h2>
        <p>{description}</p>
        {button ? (
          <Button>
            <a
              className="button-link"
              href={buttonLink}
              target="_blank"
              rel="noreferrer"
            >
              {buttonTitle}
            </a>
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

AboutCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonTitle: PropTypes.string,
  isButton: PropTypes.bool
};

export default AboutCard;
