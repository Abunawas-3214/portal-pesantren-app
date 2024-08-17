<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PesantrenCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($pesantren) {
            return [
                'name' => $pesantren->name,
                'slug' => $pesantren->slug,
                'kecamatan' => $pesantren->kecamatan,
                'gender' => $pesantren->gender,
                'logo' => asset("storage/pesantren/{$pesantren->slug}/logo.png"),
                'foto_sampul' => asset("storage/pesantren/{$pesantren->slug}/foto_sampul.png"),
                'program' => $pesantren->programs->pluck('name'),
                'tingkat' => $pesantren->tingkats->pluck('name')
            ];
        })->toArray();
    }
}
