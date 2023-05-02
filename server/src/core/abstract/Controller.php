<?php

namespace App\Core\Abstraction;

abstract class Controller
{
    public abstract function get(): void;

    public abstract function getOne(mixed $id): void;

    public abstract function post(mixed $data): void;

    public abstract function patch(mixed $data, mixed $id): void;

    public abstract function delete(mixed $id): void;


    protected function response(string $message, bool $status): mixed
    {
        return [
            "status" => $status,
            "message" => $message
        ];
    }

}