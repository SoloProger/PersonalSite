import React from "react";
import newsImg from "../../images/newsImg.png";

const Newscard = (props) => {
  const formatDate = (date) => {
    const formatedDate = new Date();
    return formatedDate.toUTCString(date);
  };

  return (
    <div className="news-card">
      <img src={newsImg} alt="" />
      <div className="card-content">
        <h3>{props.card.title}</h3>
        <div className="card-navbar">
          <h4 className="date">{props.card.date}</h4>
          <h4 className="tag">{props.card.tag}</h4>
        </div>
        <p>
          {props.card.body}
        </p>
      </div>
    </div>
  );
};

export default Newscard;
