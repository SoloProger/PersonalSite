<?php

namespace App\Helpers;

class HttpCode
{
    public static function notFound(): bool|int
    {
        return http_response_code(404);
    }

    public static function createSuccess(): bool|int
    {
        return http_response_code(201);
    }

    public static function gettingSuccess(): bool|int
    {
        return http_response_code(200);
    }
}