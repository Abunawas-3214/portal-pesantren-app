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
            'kecamatan' => $this->kecamatan,
            'gender' => $this->gender,
            'logo' => asset("storage/pesantren/{$this->slug}/logo.png"),
            'foto_sampul' => asset("storage/pesantren/{$this->slug}/foto_sampul.png"),
            'program' => $this->whenLoaded('programs', function () {
                return $this->programs->map(function ($program) {
                    return [
                        'name' => $program->name,
                    ];
                });
            }),
            'tingkat' => $this->whenLoaded('tingkats', function () {
                return $this->tingkats->map(function ($tingkat) {
                    return [
                        'name' => $tingkat->name,
                    ];
                });
            })
        ];
    }
}
