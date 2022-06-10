<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminItemController;
use App\Http\Controllers\User\UserCategoryController;
use App\Http\Controllers\User\UserItemController;
use App\Http\Controllers\User\UserFavoriteController;

// Authentication Routs
Route::group(['middleware' => 'api'], function($router) {
    Route::post('/register', [JWTController::class, 'register']);
    Route::post('/login', [JWTController::class, 'login']);
    Route::post('/logout', [JWTController::class, 'logout']);
    Route::post('/refresh', [JWTController::class, 'refresh']);
    Route::post('/profile', [JWTController::class, 'profile']);
});

// Admin APIs
Route::post('/add_item', [AdminItemController::class, 'addItem']);
Route::post('/remove_item', [AdminItemController::class, 'removeItem']);
Route::post('/update_item', [AdminItemController::class, 'updateItem']);
Route::post('/add_cat', [AdminCategoryController::class, 'addCategory']);
Route::post('/remove_cat', [AdminCategoryController::class, 'removeCategory']);
Route::post('/update_cat/{id}', [AdminCategoryController::class, 'updateCategory']);

// User APIs
Route::get('/landing_cats', [UserCategoryController::class, 'landingCategories']);
Route::get('/landing_items', [UserItemController::class, 'landingItems']);
Route::get('/get_item', [UserItemController::class, 'getItem']);
Route::get('/add_fav', [UserFavoriteController::class, 'addFavorite']);
Route::post('/get_favs', [UserFavoriteController::class, 'getFavorite']);

