import React, { useContext } from "react";
import Input from "../UI/input/Input.js";
import Button from "../UI/button/Button.js";
import { AuthContext } from "../../context";

export default function AuthForm() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    localStorage.setItem("auth", "true");
    setIsAuth(true);
  };

  return (
    <div>
      <form onSubmit={login}>
        <Input type="text" placeholder="Введите почту" />
        <Input type="password" placeholder="Введите пароль" />
        <div className="content__footer">
          <Button>Авторизоваться</Button>
        </div>
      </form>
    </div>
  );
}
