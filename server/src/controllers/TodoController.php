<?php

namespace Controllers;

use PDO;

/**
 * 
 *  Контроллер модели Todo
 * 
 *  @param model
 * 
 */


class TodoController
{

    private $todo;

    public function __construct($model)
    {
        $this->todo = $model;
    }

    public function getAll()
    {

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        $request = $this->todo->getAll();

        $todos = [];

        while ($row = $request->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $todo = [
                "id" => $id,
                "title" => $title,
                "description" => $description,
            ];

            array_push($todos, $todo);
        }

        http_response_code(200);

        echo json_encode($todos);
    }

    public function createTodo()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $data = json_decode(file_get_contents("php://input"), false);

        if (!empty($data->title && $data->description)) {


            $this->todo->title = $data->title;
            $this->todo->description = $data->description;


            if ($this->todo->createTodo()) {
                http_response_code(201);
                echo json_encode(array("message" => "Todo добавлена"), JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(503);

                echo json_encode(array("message" => "Невозможно добавить Todo"), JSON_UNESCAPED_UNICODE);
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "Невозможно создать Todo. Данные неполные"), JSON_UNESCAPED_UNICODE);
        }
    }

    public function deleteTodo()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $data = json_decode(file_get_contents("php://input"));

        $this->model->id = $data->id;

        if ($this->model->delete()) {

            http_response_code(200);

            echo json_encode(array("message" => "Todo был удалён."), JSON_UNESCAPED_UNICODE);
        } else {

            http_response_code(503);

            echo json_encode(array("message" => "Не удалось удалить todo."));
        }
    }
}
