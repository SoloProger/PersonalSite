import { Router } from "express";
import { RegisterController } from "../controllers/RegisterController";

/**
 *  Вместо типочной для себя логики, я декомпозировал функционал роута.
 *  Всю логику я вынес в контроллер, который по сути
 *  являеться классом с методами.
 *  Система похожа на ту, что используется в Laravel(PHP)
 */

// import all controllers
// import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post("/register", RegisterController.store(req, res));

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;


// TODO сделать логин роут и контроллер для него
