<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'featured_image' => $this->featured_image ? asset("storage/posts/{$this->slug}/{$this->featured_image}") : null,
            'categories' => $this->categories->pluck('name'),
            'user' => $this->user->name,
            'content' => $this->content,
            'created_at' => $this->created_at->format('d M Y'),
        ];
    }
}
