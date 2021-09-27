import React from "react";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

export default function AuthForm() {
  return (
    <div>
      <form>
        <Input type="text" placeholder="Почта" />
        <Input type="text" placeholder="Почта" />
        <div className="content__footer">
          <Button>Авторизоваться</Button>
        </div>
      </form>
    </div>
  );
}
