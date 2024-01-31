import React from "react";
import Newscard from "./NewsCard";

const Newslist = ({ news }) => {
  return (
    <div className="card__wrapper">
      {news.map((item) => (
        <Newscard card={item} />
      ))}
    </div>
  );
};

export default Newslist;
