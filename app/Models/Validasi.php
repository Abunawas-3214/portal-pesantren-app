<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Validasi extends Model
{
    use HasFactory;

    protected $fillable = ['pesantren_id', 'kategori_validasi', 'file'];

    public function pesantren()
    {
        return $this->belongsTo(Pesantren::class);
    }
}
