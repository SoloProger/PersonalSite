<?php

require __DIR__ . '/vendor/autoload.php';

use App\Core\Abstraction\Model;
use App\Core\Database\Connection;
use App\Core\Database\Table;
use App\Helpers\DotEnv;


function __init__()
{
    DotEnv::load(__DIR__);
    $model = new Model();

    $connect = new Connection([
        "HOST" => getenv("HOST"),
        "DB_NAME" => getenv("DB_NAME"),
        "USERNAME" => getenv("USERNAME"),
        "PASSWORD" => getenv("PASSWORD"),
        "PORT" => getenv("PORT")
    ]);
    
    $table = new Table($connect->getConnection(), $model);
    $table->create();
}

__init__();