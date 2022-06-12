import React, { useState, useEffect } from "react";
import NewsList from "../Lists/NewsList.jsx";
import Loader from "../UI/loader/Loader.jsx";
import { useSelector } from "react-redux";
import axios from "axios";

const News = () => {
  const [flag, setFlag] = useState(true);

  const news = useSelector((state) => state.news.news);

  // const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  // const getTodo = async () => {
  //   setLoading(true);
  //   const data = newsData;
  //   // const data = await axios.get("http://localhost:5000/news/all");
  //   // const newsData = data.data;
  //   setNews([...news, ...data]);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getTodo();
  // }, []);

  return (
    <section className="news-wrapper">
      {flag ? <sup>Soon</sup> : ""}
      <div>
        <h2>Новости</h2>
      </div>
      <hr />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Loader />
        </div>
      ) : (
        <NewsList news={news} />
      )}
    </section>
  );
};

export default News;
