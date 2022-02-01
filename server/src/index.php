<?php
require_once __DIR__ . "/../vendor/autoload.php";

use Router\Router;


$router = new Router();

$router->todoRouter();
