import React from "react";
import Button from "../UI/button/Button";
import PropTypes from "prop-types";
import { Contact } from "../../types/lists/contact";

export default function ContactCard({
  icon,
  title,
  body,
  link,
  buttonName
}: Contact) {
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
            {buttonName}
          </a>
        </Button>
      </div>
    </div>
  );
}