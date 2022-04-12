import React from "react";
import NewsCard from "../Cards/NewsCard";
import PropTypes from "prop-types";

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((oneNews) => (
        <NewsCard
          key={oneNews.key}
          title={oneNews.title}
          body={oneNews.body}
          tag={oneNews.tag}
          date={oneNews.date}
        />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array
};

export default NewsList;
