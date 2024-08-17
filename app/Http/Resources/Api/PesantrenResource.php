<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PesantrenResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'slug' => $this->slug,
            'alamat' => $this->alamat,
            'kecamatan' => $this->kecamatan,
            'pendiri' => $this->pendiri,
            'pengasuh' => $this->pengasuh,
            'tanggal_berdiri' => $this->tanggal_berdiri,
            'jumlah_santri' => $this->jumlah_santri,
            'deskripsi' => $this->deskripsi,
            'gender' => $this->gender,
            'program_unggulan' => $this->program_unggulan,
            'program' => $this->programs->pluck('name'),
            'tingkat' => $this->tingkats->pluck('name'),
            'contact' => $this->contact,
            'logo' => asset("storage/pesantren/{$this->slug}/logo.png"),
            'video_profil' => $this->video_profil,
        ];
    }
}
