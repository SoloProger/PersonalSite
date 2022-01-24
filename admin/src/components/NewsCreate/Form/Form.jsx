import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppInput from "../../UI/input/AppInput";
import AppButton from "../../UI/button/AppButton";
import classes from "./Form.module.css";
import { addNewsAction } from "../../../store/actions/newsActions";
import { addNews } from "../../../store/api/news";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const newNews = {
      title: title,
      body: body,
    };

    dispatch(addNews(newNews));
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Создать новость</h2>
      <form onSubmit={submit}>
        <AppInput
          placeholder="Введите название:"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Введите описание"
          className={classes.form_textarea}
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
        <div className={classes.form_btn}>
          <AppButton type="submit">Добавить</AppButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
