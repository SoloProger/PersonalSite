import React from "react";
import Button from "../UI/button/Button";

export default function Project(props) {
  return (
    <div className="content__wrapper">
      <div className="content__img">
        <img src={props.img} alt="Изображение" class="avatar" />
      </div>
      <div className="content_text project">
        <div className="content__text__header">
          <h3>{props.title}</h3>
        </div>
        <div className="content__body project__body">
          <p>{props.body}</p>
        </div>
        <div className="content__footer">
          <Button>
            <a
              href={props.link}
              className="button__link"
              target="_blank"
              rel="noreferrer"
            >
              Ознакомиться
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
