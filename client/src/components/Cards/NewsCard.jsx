import React from "react";
import newsImg from "../../images/newsImg.png";
import PropTypes from "prop-types";

const NewsCard = ({ title, date, tag, body }) => {
  const formatDate = (date) => {
    const formatedDate = new Date();
    return formatedDate.toUTCString(date);
  };

  return (
    <div className="news-card">
      <img src={newsImg} alt="" />
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-navbar">
          <h4 className="date">{date}</h4>
          <h4 className="tag">{tag}</h4>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  tag: PropTypes.string,
  body: PropTypes.string
};

export default NewsCard;
