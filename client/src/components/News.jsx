import React, { useState, useEffect } from "react";
import Newslist from "./NewsList";
import Loader from "./UI/loader/Loader.jsx";
import axios from "axios";

const News = () => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodo = async () => {
    setLoading(true);
    const data = await axios.get("http://localhost:5000/news/all");
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
