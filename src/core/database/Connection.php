<?php

namespace App\Core\Database;

use PDO;
use PDOException;

class Connection
{
    private string $host;
    private string $nameDB;
    private string $username;
    private string $password;

    private int $port;
    public PDO $connection;

    public function __construct($config)
    {
        $this->host = $config['HOST'];
        $this->nameDB = $config['DB_NAME'];
        $this->username = $config['USERNAME'];
        $this->password = $config['PASSWORD'];
        $this->port = (int) $config['PORT'];
    }

    public function getConnection(): PDO
    {

        try {
            $this->connection = new PDO($this->configDb(), $this->username, $this->password);
            $this->connection->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error:" . $exception->getMessage();
        }

        return $this->connection;
    }

    private function configDb(): string
    {
        return sprintf("mysql:host=%s;port=%d;dbname=%s", $this->host, $this->port, $this->nameDB);
    }
}