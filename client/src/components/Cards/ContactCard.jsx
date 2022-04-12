import React from "react";
import Button from "../UI/button/Button";
import PropTypes from "prop-types";

export default function ContactCard({ icon, title, body, link, button }) {
  return (
    <div className="contact__card">
      <div className="card__header">
        <img src={icon} alt="icon" />
        <h3>{title}</h3>
      </div>
      <div className="card__body">{body}</div>
      <div className="card__footer">
        <Button>
          <a
            href={link}
            className="button__link"
            target="_blank"
            rel="noreferrer"
          >
            {button}
          </a>
        </Button>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.string,
  button: PropTypes.string,
};
