<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NavigationLink extends Model
{

    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */

    protected $table = 'navigation_links';

    protected $fillable = ['id', 'name', 'path'];

    public function scopeGetLinks($query) {
        return $query->get();
    }
}
