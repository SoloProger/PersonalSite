const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

exports.store = async (request, response) => {
  try {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array(),
        message: "Неправильные данные при авторизации",
      });
    }

    const { email, password } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
      return response.status(400).json({ message: "Пользователь не найден" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return response
        .status(400)
        .json({ message: "Неверный пароль, попробуйте снова" });
    }

    const token = jwt.sign({ userId: user.id }, config.get("jwtKey"), {
      expiresIn: "1h",
    });

    response.json({ token, userId: user.id });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Произошла ошибка, повторите попытку позже!" });
  }
};
