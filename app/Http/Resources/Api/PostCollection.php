<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PostCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->collection->map(function ($post) {
            return [
                'title' => $post->title,
                'slug' => $post->slug,
                'featured_image' => $post->featured_image ? asset("storage/posts/{$post->featured_image}") : null,
                'categories' => $post->categories->pluck('name'),
                'user' => $post->user->name,
                'created_at' => $post->created_at->format('d M Y'),
            ];
        })->toArray();
    }
}
