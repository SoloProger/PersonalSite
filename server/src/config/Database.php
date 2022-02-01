<?php
namespace Config;

use PDO;
use PDOException;

/**
 *
 *  Класс конфигурации базы данных 
 * 
 */


class Database
{
    private $host = "localhost";
    private $db_name = "personsite";
    private $username = "root";
    private $password = "root";
    public $connection;


    public function getConnect()
    {
        $this->connection = null;

        try {
            $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->connection->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->connection;
    }
}
