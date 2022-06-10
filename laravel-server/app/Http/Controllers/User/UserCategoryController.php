<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class UserCategoryController extends Controller
{
    // Get All Categories 

    public function landingCategories(){
         
        $categories = Category::all();
        
        return response()->json([
            "status" => "Success",
            "categories" => $categories
        ], 200);
    }
}
