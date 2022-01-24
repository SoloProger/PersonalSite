import React from "react";

const Newscard = (props) => {
  
  const formatDate = (date) => {
    const formatedDate = new Date();
    return formatedDate.toUTCString(date);
  };

  return (
    <div className="contact__card">
      <div className="card__header">
        <h3>{props.card.title}</h3>
      </div>
      <div className="card__body">{props.card.body}</div>
      <div className="card__footer">{formatDate(props.card.publish)}</div>
    </div>
  );
};

export default Newscard;
