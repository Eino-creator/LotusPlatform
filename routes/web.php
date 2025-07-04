<?php

use App\Http\Controllers\AlbumController;
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
});

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('welcome');

Route::get('/over-ons', function () {
    return Inertia::render('Guest/AboutUs');
})->name('about-us');

Route::get('/foto-albums', function () {
    return Inertia::render('Guest/Albums');
})->name('photo-albums');

Route::resource('albums', AlbumController::class);

//Route::get('/foto-album', function () {
//    return Inertia::render('Guest/Album');
//})->name('photo-album');

require __DIR__.'/auth.php';
