<?php



namespace App\Controllers;

use App\Core\Abstraction\Controller;
use Exception;
use PDO;

class AboutController extends Controller
{

    private readonly PDO $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
        $this->createTableAboutCards();
    }


    private function tableExist()
    {
        try {
            $result = $this->connection->query("DESCRIBE about_cards");
        } catch (Exception $ex) {
            return FALSE;
        }
        return $result !== FALSE;
    }

    public function createTableAboutCards()
    {
        $query = "
            CREATE TABLE about_cards (
                id int auto_increment primary key, 
                title varchar(20) not null,
                description text,
                link varchar(255),
                link_title varchar(50),
                is_button bool not null
            );
        ";

        if (!($this->tableExist())) {
            $this->connection->exec($query);
        }
    }

    public function get(): void
    {

        

        $query = "SELECT * FROM about_cards;";
        $links = $this->connection->query($query);

        $result = [];
        while ($row = $links->fetch(PDO::FETCH_ASSOC)) {
            $link = [
                "id" => $row["id"],
                "title" => $row["title"],
                "description" => $row["description"],
                "link" => $row["link"],
                "linkTitle" => $row["link_title"],
                "isButton" => (bool) $row["is_button"]
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