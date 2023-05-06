<?php

namespace App\Core\Routing;

use App\Core\Abstraction\Controller;

class Router
{

    private Controller $controller;

    public function __construct(Controller $controller)
    {
        $this->controller = $controller;
    }

    public function resolve(string $path): void
    {
        



        $id = Request::getId();
        switch (Request::getMethod()) {
            case 'GET':
                if (isset($id)) {
                    $this->getOne($path, $id);
                }
                $this->get($path);
                break;
            case 'POST':
                $this->post($path);
                break;
            case 'PATCH':
                $this->patch($path, $id);
                break;
            case 'DELETE':
                $this->delete($path, $id);
                break;
        }
    }

    public final function get(string $path): void
    {
        if (Request::path() === "/$path") {
            $this->controller->get();
        }
    }


    public final function getOne(string $path, mixed $id): void
    {
        if (Request::path() === "/$path/$id") {
            $this->controller->getOne($id);
        }
    }

    public final function post(string $path): void
    {
        if (Request::path() === "/$path") {
            $data = json_decode(file_get_contents('php://input'), true);
            $this->controller->post($data);
        }
    }
    public final function patch(string $path, mixed $id): void
    {
        if (Request::path() === "/$path/$id") {
            $data = json_decode(file_get_contents('php://input'), true);
            $this->controller->patch($data, $id);
        }
    }
    public final function delete(string $path, mixed $id): void
    {
        if (Request::path() === "/$path/$id") {
            $this->controller->delete($id);
        }
    }
}