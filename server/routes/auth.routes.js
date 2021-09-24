import { Router } from "express";
import { RegisterController } from "../controllers/RegisterController";

import { check } from "express-validator";
import { LoginController } from "../controllers/LoginController";

/**
 *  Вместо типочной для себя логики, я декомпозировал функционал роута.
 *  Всю логику я вынес в контроллер, который по сути
 *  являеться классом с методами.
 *  Система похожа на ту, что используется в Laravel(PHP)
 */

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post(
  "/register",
  [
    check("email", "Неправильный E-mail").isEmail(),
    check("password", "Минимальная длинна пароля 6 символов").isLength({
      min: 6,
    }),
  ],
  RegisterController.store(req, res)
);

routes.post(
  "/login",
  [
    check("email", "Введите правильный E-mail").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  LoginController.store
);

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;

// TODO сделать логин роут и контроллер для него
