<?php

namespace App\Core\Database;

class QueryBuilder
{
    public static function createTable(array $columns, string $tableName): string
    {
        $query = "create table $tableName ( ";
        foreach ($columns as $column) {
            $query .= "$column ";
        }
        $query .= ");";

        return $query;
    }
}