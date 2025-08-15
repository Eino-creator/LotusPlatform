<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    /** @use HasFactory<\Database\Factories\AlbumFactory> */
    use HasFactory;

    protected $fillable = ['title', 'description', 'cover_image'];

    public function photos()
    {
        return $this->hasMany(Album_Photo::class, 'album_id', 'id');
    }
}
