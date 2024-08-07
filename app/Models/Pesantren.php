<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesantren extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'pendiri', 'pengasuh', 'tanggal_berdiri', 'deskripsi', 'gender', 'program_unggulan', 'contact', 'logo', 'video_profil', 'foto_sampul'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function programs()
    {
        return $this->hasMany(Program::class, 'pesantren_program');
    }

    public function tingkats()
    {
        return $this->hasMany(Tingkat::class, 'pesantren_tingkat');
    }

    public function media()
    {
        return $this->hasOne(Media::class);
    }

    public function photos()
    {
        return $this->hasMany(PesantrenPhoto::class, 'pesantren_photos');
    }

    public function validasi()
    {
        return $this->hasMany(Validasi::class);
    }
}
