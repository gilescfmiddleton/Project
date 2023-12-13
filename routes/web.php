<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components
use App\Http\Controllers\PostController;

Route::get('/', [PostController::class, "index"]);

Route::resource('/post', PostController::class);


