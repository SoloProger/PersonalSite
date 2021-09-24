import User from "../models/User";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

export class RegisterController {
  async store(request, response) {
    try {
      const errors = validationResult(request);

      if (!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: "Неправильные данные при регистрации",
        });
      }

      const { email, password } = request.body;

      const person = await User.findOne({ email });

      if (person) {
        return response
          .status(400)
          .json({ message: "Такой пользователь уже существует!" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({ email, password: hashedPassword });

      await user.save();

      response.status(201).json({ message: "Пользователь создан!" });
    } catch (error) {
      response
        .status(500)
        .json({ message: "Произошла ошибка, повторите попытку позже!" });
    }
  }
}

// TODO сделать валидацию данных
