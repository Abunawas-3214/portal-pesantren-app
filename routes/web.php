<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/pesantren', [PesantrenController::class, 'edit']);
    Route::patch('/pesantren', [PesantrenController::class, 'update']);
    Route::delete('/pesantren', [PesantrenController::class, 'destroy']);


    Route::get('/program', [ProgramController::class, 'edit']);
    Route::patch('/program', [ProgramController::class, 'update']);
    Route::delete('/program', [ProgramController::class, 'destroy']);


    Route::get('/posts', [PostController::class, 'edit']);
    Route::patch('/posts', [PostController::class, 'update']);
    Route::delete('/posts', [PostController::class, 'destroy']);

    Route::get('/tingkat', [TingkatController::class, 'edit']);
    Route::patch('/tingkat', [TingkatController::class, 'update']);
    Route::delete('/tingkat', [TingkatController::class, 'destroy']);

});

require __DIR__.'/auth.php';
