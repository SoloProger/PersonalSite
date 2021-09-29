import React, { useContext, useState } from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import { AuthContext } from "../context/AuthContext";
import useFetching from "../hooks/useFetching";

export default function AuthForm() {
  const auth = useContext(AuthContext);
  const { loading, request, error, clearError } = useFetching();
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/register",
        "POST",
        { ...form }
      );
    } catch (error) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/auth/login",
        "POST",
        {
          ...form,
        }
      );
      auth.login(data.token, data.userID);
    } catch (error) {}
  };

  return (
    <div>
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Введите E-mail"
          value={form.email}
          onChange={changeHandler}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Введите пароль"
          value={form.password}
          onChange={changeHandler}
        />
        <div className="auth__block">
          <div className="content__footer">
            <Button onClick={loginHandler}>Авторизоваться</Button>
          </div>
          <div className="content__footer">
            <Button onClick={registerHandler}>Зарегистрироваться</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
