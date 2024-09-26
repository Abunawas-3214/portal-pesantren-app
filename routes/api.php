<?php

use App\Http\Controllers\Api\PesantrenController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/api/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/pesantren', [PesantrenController::class, 'index']);
Route::get('/pesantren/{slug}', [PesantrenController::class, 'show']);

Route::get('/post', [PostController::class, 'index']);
Route::get('/post/{slug}', [PostController::class, 'show']);