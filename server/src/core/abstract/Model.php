<?php

namespace App\Core\Abstraction;

class Model
{
    public string $tableName = 'test';


    public function fields(): mixed
    {
        return ["id int auto_increment primary key," => "null", "title varchar(20)," => "null", "body varchar(150)" => "null"];
    }

    public function getColumns(): array
    {
        $columns = [];
        foreach ($this->fields() as $key => $value) {
            array_push($columns, $key);
        }
        return $columns;
    }

    public function getValues(): array
    {
        $values = [];
        foreach ($this->fields() as $key => $value) {
            array_push($values, $value);
        }
        return $values;
    }
}