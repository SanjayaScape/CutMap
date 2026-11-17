<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Landing Page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// App Workspace Routes (Akses Terbuka untuk kemudahan review desain)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/cut-plan/new', function () {
    return Inertia::render('CutPlan/NewCutPlan');
})->name('cut-plan.new');

Route::get('/patterns', function () {
    return Inertia::render('Patterns/Index');
})->name('patterns.index');

Route::get('/patterns/create', function () {
    return Inertia::render('Patterns/Create');
})->name('patterns.create');

Route::get('/projects', function () {
    return Inertia::render('Projects/Index');
})->name('projects.index');

Route::get('/settings', function () {
    return Inertia::render('Settings/Index');
})->name('settings.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
