<?php

namespace App\Controllers;

use App\Core\Abstraction\Controller;
use Exception;
use PDO;

class ContactController extends Controller
{

    private readonly PDO $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
        $this->createTableContacts();
    }


    private function tableExist()
    {
        try {
            $result = $this->connection->query("DESCRIBE contacts");
        } catch (Exception $ex) {
            return FALSE;
        }
        return $result !== FALSE;
    }

    public function createTableContacts()
    {
        $query = "
            CREATE TABLE contacts (
                id int auto_increment primary key, 
                icon varchar(255) not null,
                title varchar(30) not null,
                body text,
                button_name varchar(30) not null DEFAULT 'Посмотреть',
                link varchar(50) not null
            );
        ";

        if (!($this->tableExist())) {
            $this->connection->exec($query);
        }
    }

    public function get(): void
    {

        $query = "SELECT * FROM contacts;";
        $contacts = $this->connection->query($query);

        $result = [];
        while ($row = $contacts->fetch(PDO::FETCH_ASSOC)) {
            $contact = [
                "id" => $row["id"],
                "icon" => $row["icon"],
                "title" => $row["title"],
                "body" => $row["body"],
                "buttonName" => $row["button_name"],
                "link" => $row["link"],
            ];
            array_push($result, $contact);
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