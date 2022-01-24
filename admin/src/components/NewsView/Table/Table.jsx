import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, removeNews } from "../../../store/api/news";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import classes from "./Table.module.css";

const Table = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  const news = useSelector((state) => state.news.news);
  const deleteOneNews = (item) => {
    dispatch(removeNews(item));
  };

  const formatDate = (date) => {
    const formatedDate = new Date();
    return formatedDate.toUTCString(date);
  };

  return (
    <table className={classes.app_table}>
      <thead>
        <tr className={classes.table_headers}>
          <th className={classes.headers_item}>Название </th>
          <th className={classes.headers_item}>Описание</th>
          <th className={classes.headers_item}>Опубликовано</th>
          <th className={classes.headers_item}>Удалить</th>
          <th className={classes.headers_item}>Редактировать</th>
        </tr>
      </thead>

      <tbody>
        {news.map((item) => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>{formatDate(item.publish)}</td>
            <td>
              <button
                className={classes.delete_btn}
                onClick={() => deleteOneNews(item)}
              >
                <MdDelete size="2em" color="red" />
              </button>
            </td>
            <td>
              <Link className="link" to="/news/update">
                <MdEdit size="2em" color="green" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
