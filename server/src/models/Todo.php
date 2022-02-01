<?php

namespace Models;

/**
 * Модель Todo
 * 
 * @param $db;
 * 
 */


class Todo
{
    private $connection;

    public $id;
    public $title;
    public $description;

    public function __construct($db)
    {
        $this->connection = $db;
    }

    public function getAll()
    {
        $query = "SELECT * FROM `todos`";

        $result = $this->connection->prepare($query);

        $result->execute();

        return $result;
    }

    public function createTodo()
    {

        $query = "INSERT INTO `todos` SET  title=:title, description=:description";

        $result = $this->connection->prepare($query);

        $result->bindParam(":title", $this->title);
        $result->bindParam(":description", $this->description);

        if ($result->execute()) {
            return true;
        }

        return false;
    }


    public function deleteTodo()
    {
        $query = "DELETE FROM `todos` WHERE id = ?";

        $result = $this->connection->prepare($query);

        $result->bindParam(1, $this->id);

        if ($result->execute()) {
            return true;
        }

        return false;
    }
}
