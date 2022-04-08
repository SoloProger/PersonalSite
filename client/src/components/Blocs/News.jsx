import React, { useState, useEffect } from "react";
import Newslist from "../Lists/NewsList.jsx";
import Loader from "../UI/loader/Loader.jsx";
import axios from "axios";

const News = () => {
  const [flag, setFlag] = useState(true);

  const newsData = [
    {
      title: "hello",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      date: "12.22.2334",
      tag: "habr"
    },
    {
      title: "hello",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      date: "12.22.2334",
      tag: "habr"
    },
    {
      title: "hello",
      body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      date: "12.22.2334",
      tag: "habr"
    }
  ];

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTodo = async () => {
    setLoading(true);
    const data = newsData;
    // const data = await axios.get("http://localhost:5000/news/all");
    // const newsData = data.data;
    setNews([...news, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="news-wrapper">
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
        <Newslist news={news} />
      )}
    </div>
  );
};

export default News;
