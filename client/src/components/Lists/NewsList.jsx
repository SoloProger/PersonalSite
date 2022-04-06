import React from "react";
import Newscard from "../Cards/NewsCard";

const Newslist = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <Newscard card={item} />
      ))}
    </div>
  );
};

export default Newslist;
