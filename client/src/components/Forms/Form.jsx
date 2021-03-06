import React, { useState, useEffect } from "react";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";
import Logo from "../../images/logo.png"

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);

  const [nameError, setNameError] = useState("Имя не может быть пустым!");
  const [phoneError, setPhoneError] = useState("Телефон не может быть пустым!");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, phoneError]);

  const nameHandler = (event) => {
    setName(event.target.value);
    // const re =
    //   /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    if (!event.target.value) {
      setNameError("Некорректное имя!");
    } else {
      setNameError("");
    }
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
    // const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!event.target.value) {
      setPhoneError("Некорректный телефон!");
    } else {
      setPhoneError("");
    }
  };

  const blurHandler = (event) => {
    // eslint-disable-next-line default-case
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
    }
  };

  return (
    <div className="contact__wrapper">
      <div className="contact__header">
        <h2>Форма связи</h2>
      </div>
      <hr />
      <div className="form__inner">
        <div className="form__img">
          <img src={Logo} alt="" className="image" />
        </div>
        <div className="form__wrapper">
          <div className="form__header">
            <h2>Заполните форму</h2>
          </div>
          <form>
            {nameDirty && nameError && <div className="error">{nameError}</div>}
            <div className="form__input">
              <Input
                name="name"
                type="text"
                placeholder="Ваше имя"
                value={name}
                onBlur={(event) => blurHandler(event)}
                onChange={(event) => nameHandler(event)}
              />
            </div>

            {phoneDirty && phoneError && (
              <div className="error">{phoneError}</div>
            )}
            <div className="form__input">
              <Input
                name="phone"
                placeholder="Ваш телефон"
                type="text"
                value={phone}
                onBlur={(event) => blurHandler(event)}
                onChange={(event) => phoneHandler(event)}
              />
            </div>

            <Button disabled={!formValid}>Оставить заявку</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
