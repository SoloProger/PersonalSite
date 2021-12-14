import React from "react";
import Button from "./UI/button/Button";

export default function Card(props) {
  return (
      <div className="contact__card">
        <div className="card__header">
          <img
            src={props.icon}
            alt="icon"
          />
          <h3>{props.title}</h3>
        </div>
        <div className="card__body">
          {props.body}
        </div>
        <div className="card__footer">
          <Button>
            <a href={props.link} className="button__link" target="_blank" rel="noreferrer">
              {props.button}
            </a>
          </Button>
        </div>
      </div>
  );
}
