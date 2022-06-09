<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;


// Authentication Routs
Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

// Admin APIs
Route::post('/add_item', [ItemController::class, 'addItem']);
Route::post('/remove_item', [ItemController::class, 'removeItem']);
Route::post('/update_item', [ItemController::class, 'updateItem']);
Route::post('/add_cat', [CategoryController::class, 'addCategory']);
Route::post('/remove_cat', [CategoryController::class, 'removeCategory']);
Route::post('/update_cat', [CategoryController::class, 'updateCategory']);

// User APIs
Route::get('/landing_cats', [CategoryController::class, 'landingCategories']);
Route::get('/landing_items', [ItemController::class, 'landingItems']);
Route::get('/get_item', [ItemController::class, 'getItem']);
Route::get('/add_fav', [FavoriteController::class, 'addFavorite']);
Route::post('/get_favs', [FavoriteCController::class, 'getFavorite']);

