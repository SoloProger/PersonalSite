import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../../store/api/news";
import { allNewsAction, removeNewsAction } from "../../../store/actions/newsActions";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import classes from "./Table.module.css";

const Table = () => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news);

  const getNews = () => {
    // dispatch(fetchNews());
  };

  const removeNews = (item) => {
    dispatch(removeNewsAction(item.id));
  };

  // useEffect(() => {
  //   getNews();
  // }, []);

  console.log(news);

  return (
    <table className={classes.app_table}>
      <tr className={classes.table_headers}>
        <th className={classes.headers_item}>Название </th>
        <th className={classes.headers_item}>Описание</th>
        <th className={classes.headers_item}>Опубликовано</th>
        <th className={classes.headers_item}>Удалить</th>
        <th className={classes.headers_item}>Редактировать</th>
      </tr>

      {news.map((item) => (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.body}</td>
          <td>{item.updated_at}</td>
          <td>
            <button className={classes.delete_btn} onClick={() => removeNews(item)}>
              <MdDelete size="2em" color="red" />
            </button>
          </td>
          <td>
            <Link className="link" to="news/update">
              <MdEdit size="2em" color="green" />
            </Link>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
