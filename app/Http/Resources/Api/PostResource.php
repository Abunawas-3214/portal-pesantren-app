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
            'featured_image' => $this->featured_image ? asset("storage/posts/{$this->featured_image}") : null,
            'categories' => $this->categories->pluck('name'),
            'user' => $this->user->name,
            'content' => $this->content,
            'created_at' => $this->created_at->format('d M Y'),
            'pesantren' => $this->user->pesantren ? [
                'name' => $this->user->pesantren->name,
                'slug' => $this->user->pesantren->slug,
                'logo' => $this->user->pesantren->logo ? asset("storage/pesantren/{$this->user->pesantren->slug}/logo.png") : null,
            ] : null,
            'related_posts' => $this->user->posts()->where('id', '!=', $this->id)->latest()->take(6)->get()->map(function ($post) {
                return [
                    'name' => $post->title,
                    'slug' => $post->slug,
                ];
            }),
        ];
    }
}
