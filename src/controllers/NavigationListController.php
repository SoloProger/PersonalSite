<?php

namespace App\Controllers;

use App\Core\Abstraction\Controller;
use Exception;
use PDO;

class NavigationListController extends Controller
{

    private readonly PDO $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
        $this->createTableNavigation();
    }


    private function tableExist()
    {
        try {
            $result = $this->connection->query("DESCRIBE navigation");
        } catch (Exception $ex) {
            return FALSE;
        }
        return $result !== FALSE;
    }

    public function createTableNavigation()
    {
        $query = "
            CREATE TABLE navigation (
                id int auto_increment primary key, 
                path varchar(20) not null,
                name varchar(30) not null
            );
        ";

        if (!($this->tableExist())) {
            $this->connection->exec($query);
        }
    }

    public function get(): void
    {

        $query = "SELECT * FROM navigation;";
        $links = $this->connection->query($query);

        $result = [];
        while ($row = $links->fetch(PDO::FETCH_ASSOC)) {
            $link = [
                "id" => $row["id"],
                "path" => $row["path"],
                "name" => $row["name"],
            ];
            array_push($result, $link);
        }
        echo json_encode(["status" => "success", "data" => $result]);
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