<?php

namespace App\Core\Database;

use App\Core\Abstraction\Model;
use PDO;

class Table
{
    private readonly PDO $connection;
    private readonly Model $model;

    public function __construct(PDO $connection, Model $model)
    {
        $this->connection = $connection;
        $this->model = $model;
    }

    public function create(): void
    {
        $query = QueryBuilder::createTable($this->model->getColumns(), $this->model->tableName);
        $this->connection->exec($query);
    }
}