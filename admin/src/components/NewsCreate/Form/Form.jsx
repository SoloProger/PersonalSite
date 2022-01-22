import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppInput from "../../UI/input/AppInput";
import AppButton from "../../UI/button/AppButton";
import classes from "./Form.module.css";
import { addNewsAction } from "../../../store/actions/newsActions";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNews = (event) => {
    event.preventDefault();
    const newNews = {
      id: Date.now,
      title: title,
      body: body,
      updated_at: "12.12.21",
    };

    dispatch(addNewsAction(newNews));
  };

  return (
    <div>
      <h2>Создать новость</h2>
      <form onSubmit={addNews}>
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
