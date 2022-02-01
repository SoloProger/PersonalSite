<?php

namespace Router;

use Config\Database;
use Controllers\TodoController;
use Models\Todo;

/**
 * 
 * Кастомный простенький маршрутизатор
 * В условиях вызываються контроллеры
 * 
 */



class Router
{

    private $url;
    private $database;
    private $connection;
    private $model;
    private $controller;


    public function __construct()
    {
        $this->url = $_SERVER['REQUEST_URI'];
        $this->database = new Database();
        $this->connection = $this->database->getConnect();
    }

    public function todoRouter()
    {
        $this->model = new Todo($this->connection);
        $this->controller = new TodoController($this->model);

        if ($this->url === "/todo/create") {
            $this->controller->createTodo();
        } else if ($this->url   === "/todos") {
            $this->controller->getAll();
        } elseif ($this->url   === '/todo/delete') {
            echo "Роут для удаления TODO";
        }
    }
}

