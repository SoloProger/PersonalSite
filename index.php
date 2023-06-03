<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

require __DIR__ . '/vendor/autoload.php';

use App\Controllers\AboutController;
use App\Controllers\ContactController;
use App\Controllers\NavigationListController;
use App\Controllers\PortfolioController;
use App\Core\Database\Connection;
use App\Core\Routing\Router;
use App\Helpers\DotEnv;


function __init__()
{

    DotEnv::load(__DIR__);

    $connect = new Connection([
        "HOST" => getenv("HOST"),
        "DB_NAME" => getenv("DB_NAME"),
        "USERNAME" => getenv("USERNAME"),
        "PASSWORD" => getenv("PASSWORD"),
        "PORT" => getenv("PORT")
    ]);

    $navigationRouter = new Router(new NavigationListController($connect->getConnection()));
    $contactRouter = new Router(new ContactController($connect->getConnection()));
    $aboutRouter = new Router(new AboutController($connect->getConnection()));
    $portfolioRouter = new Router(new PortfolioController($connect->getConnection()));

    $navigationRouter->resolve('links');
    $contactRouter->resolve('contacts');
    $aboutRouter->resolve('about');
    $portfolioRouter->resolve('portfolio');
}

__init__();