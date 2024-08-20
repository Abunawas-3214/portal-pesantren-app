<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class Pesantren extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $keyType = 'string';
    public $incrementing = false;
    protected $fillable = ['user_id', 'name', 'slug', 'kecamatan', 'alamat', 'pendiri', 'pengasuh', 'tanggal_berdiri', 'jumlah_santri', 'deskripsi', 'gender', 'program_unggulan', 'contact', 'video_profil'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function programs()
    {
        return $this->belongsToMany(Program::class, 'pesantren_program');
    }

    public function tingkats()
    {
        return $this->belongsToMany(Tingkat::class, 'pesantren_tingkat');
    }

    public function media()
    {
        return $this->hasOne(Media::class);
    }

    public function photos()
    {
        return $this->hasMany(PesantrenPhoto::class, 'pesantren_id');
    }

    public function validasi()
    {
        return $this->hasMany(Validasi::class);
    }

    public function usaha()
    {
        return $this->hasMany(UsahaPesantren::class);
    }

    public function scopeSearch(Builder $query, Request $request)
    {
        return $query
            ->where(function ($query) use ($request) {
                return $query
                    ->when($request->search, function ($query) use ($request) {
                        $query->where('name', 'LIKE', "%{$request->search}%");
                    });
            });
    }
}
