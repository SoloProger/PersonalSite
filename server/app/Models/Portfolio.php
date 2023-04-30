<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Portfolio extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */

    protected $table = 'portfolio';

    protected $fillable = ['id', 'title', 'description', 'link', 'img_path', 'is_action'];

    public function scopeProjects($query)
    {
        return $query->get();
    }

    public function scopeAddProject($query, $data)
    {
        return $query->create([
            'link' => $data['link'],
            'title' => $data['title'],
            'description' => $data['description'],
            'img_path' => $data['imgPath'],
            'is_action' => $data['isAction']
        ]);
    }
}
