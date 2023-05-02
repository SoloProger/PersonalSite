<?php

namespace App\Controllers;

use App\Core\Abstraction\Controller;

class ContactController extends Controller
{
    public function get(): void
    {
        $posts = Database::getQuery('posts');
        echo json_encode($posts);
    }

    public function getOne(mixed $id): void
    {

    }
    public function post(mixed $data): void
    {

    }
    public function patch(mixed $data, mixed $id): void
    {

    }
    public function delete(mixed $id): void
    {

    }
}