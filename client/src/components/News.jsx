import React, { useState, useEffect } from "react";
import Newslist from "./NewsList";
import Button from "./UI/button/Button";
import axios from "axios";

const News = () => {
  // const arr = [
  //   { title: "Hello", body: "world", btn: "Подробнее" },
  //   { title: "Hello2", body: "world2", btn: "Подробнее" },
  //   { title: "Hello3", body: "world3", btn: "Подробнее" },
  // ];

  const [news, setNews ] = useState([]);

  const getTodo = async () => {
    const data = await axios.get("http://localhost:5000/posts/all");
    const newsData = data.data;
    return setNews([...news, ...newsData]);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="contact__wrapper">
      <div className="contact__header">
        <h2>Новости</h2>
      </div>
      <hr />
      <Newslist news={news} />
    </div>
  );
};

export default News;
