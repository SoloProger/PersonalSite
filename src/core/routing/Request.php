<?php

namespace App\Core\Routing;

class Request
{
    public static function getMethod(): string
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    public static function path(): string
    {
        $path = $_SERVER['REQUEST_URI'] ?? '/';
        $position = strpos($path, '?');

        if ($position === false)
            return $path;
        return substr($path, 0, $position);
    }

    public static function getId()
    {
        $params = explode('/', self::path());

        if (isset($params[2])) {
            return $params[2];
        }
    }
}