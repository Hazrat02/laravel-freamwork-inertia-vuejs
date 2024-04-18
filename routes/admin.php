<?php
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Admin routes
Route::prefix('admin')->middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
    'admin',
])->group(function () {
    // Admin Dashboard
    Route::get('/dashboard', function () {

            // If the user is an admin, show the admin dashboard
            return Inertia::render('Admin/Dashboard');

    })->name('admin.dashboard');
    Route::get('/user', function () {
        return Inertia::render('Admin/UserManage');
    })->name('admin.user');

    // Other admin routes can be defined here...
});
