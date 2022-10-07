import React, { useState } from "react";
import Button from "../UI/button/Button";
import { AboutCardProps } from "../../types/cards/about-card";

const AboutCard = ({
  title,
  description,
  buttonLink,
  buttonTitle,
  isButton
}: AboutCardProps) => {
  const [button] = useState(isButton);

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

export default AboutCard;
