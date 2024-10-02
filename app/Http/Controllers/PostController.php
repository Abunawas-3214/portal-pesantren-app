<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostsRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        Gate::define('post_access', function ($user) {
            return $user->can('post_access_all') || $user->can('post_access_self');
        });

        if (Gate::check('post_access_all')) {
            return inertia('Post/Index', [
                'posts' => Post::with('user', 'categories')->get()
            ]);
        }

        if (Gate::check('post_access_self')) {
            return inertia('Post/Index', [
                'posts' => Post::with('user', 'categories')->where('user_id', auth()->user()->id)->get()
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        Gate::authorize('post_create');
        $categories = Category::all();
        return inertia('Post/Create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostsRequest $request)
    {
        Gate::authorize('post_create');
        $post = new Post;
        $post->fill($request->validated());
        $post->user_id = auth()->user()->id;

        if ($request->hasFile('featured_image')) {
            $featured_image = $request->file('featured_image');
            $filename = $request->slug . '.' . $featured_image->getClientOriginalExtension();
            $featured_image->storeAs('public/posts', $filename);
            $post->featured_image = $filename;
        }

        $post->save();

        $categories = $request->categories;
        $post->categories()->sync($categories);

        return redirect()->route('post.index')->with('success', 'Post created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        Gate::authorize('post_show');

        $post = $post->load('user', 'categories');
        $post->featured_image = $post->featured_image ? asset("storage/posts/{$post->featured_image}") : null;
        return inertia('Post/View', [
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        Gate::authorize('post_edit');
        $categories = Category::all();
        $post = $post->load('categories');
        $post->featured_image = $post->featured_image ? asset("storage/posts/{$post->featured_image}") : null;
        return inertia('Post/Edit', [
            'post' => $post->load('categories'),
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        Gate::authorize('post_edit');

        if ($request->hasFile('featured_image')) {
            if ($post->featured_image) {
                Storage::delete("public/posts/{$post->featured_image}");
            }

            $featured_image = $request->file('featured_image');
            $filename = $request->slug . '.' . $featured_image->getClientOriginalExtension();
            $featured_image->storeAs('public/posts', $filename);
            $post->featured_image = $filename;
            $post->save();
        }

        if ($post->featured_image && ($request->slug !== $post->slug)) {
            $oldFilename = $post->featured_image;
            $newFilename = $request->slug . '.' . pathinfo($oldFilename, PATHINFO_EXTENSION);
            Storage::move("public/posts/{$oldFilename}", "public/posts/{$newFilename}");
            $post->featured_image = $newFilename;
            $post->save();
        }

        $post->update($request->except('featured_image'));
        $categories = $request->categories;
        $post->categories()->sync($categories);

        return redirect()->route('post.index')->with('success', 'Post updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        Gate::authorize('post_delete');
        if ($post->featured_image) {
            Storage::delete("public/posts/{$post->featured_image}");
        }
        $post->delete();
        return redirect()->route('post.index')->with('success', 'Post deleted successfully');
    }
}
