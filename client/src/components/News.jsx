import React, { useState, useEffect } from "react";
import Newslist from "./NewsList";
import Loader from "./UI/loader/Loader.jsx";
import axios from "axios";

const News = () => {
  // const arr = [
  //   { title: "Hello", body: "world", btn: "Подробнее" },
  //   { title: "Hello2", body: "world2", btn: "Подробнее" },
  //   { title: "Hello3", body: "world3", btn: "Подробнее" },
  // ];

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodo = async () => {
    setLoading(true);
    const data = await axios.get("http://77.223.97.201/api/news/");
    const newsData = data.data;
    setNews([...news, ...newsData]);
    setLoading(false);
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
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Loader />
        </div>
      ) : (
        <Newslist news={news} />
      )}
    </div>
  );
};

export default News;
