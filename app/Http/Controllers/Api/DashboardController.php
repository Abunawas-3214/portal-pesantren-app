<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pesantren;
use App\Models\Post;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pesantren_count = Pesantren::count();
        $santri_count = (int) Pesantren::sum('jumlah_santri');

        $random_pesantren = Pesantren::select('name', 'kecamatan', 'slug', 'foto_sampul')
            ->inRandomOrder()
            ->limit(4)
            ->get()
            ->map(function ($pesantren) {
                return [
                    'name' => $pesantren->name,
                    'kecamatan' => $pesantren->kecamatan,
                    'slug' => $pesantren->slug,
                    'foto_sampul' => $pesantren->foto_sampul ? asset("storage/pesantren/{$pesantren->slug}/{$pesantren->foto_sampul}") : null,
                ];
            });


        $latest_posts = Post::select('title', 'slug', 'user_id', 'featured_image', 'created_at')
            ->with('user:id,name')
            ->latest()
            ->limit(5)
            ->get()
            ->map(function ($post) {
                return [
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'user' => $post->user->name,
                    'featured_image' => $post->featured_image ? asset("storage/posts/{$post->featured_image}") : null,
                    'created_at' => $post->created_at->format('d M Y'),
                ];
            });
        return response()->json([
            'meta' => [
                'pesantren_total' => $pesantren_count,
                'santri_total' => $santri_count
            ],
            'pesantren' => $random_pesantren,
            'posts' => $latest_posts
        ]);

    }
}
