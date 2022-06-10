<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class UserCategoryController extends Controller
{
    // Get All Categories or a specific Category
    // pass the (id) to het a specific category
    // or just leave it null and the response will be all categories
    public function landingCategories($id = null){
        if($id != null){
            $categories = Category::find($id);
        }else{
            $categories = Category::all();
        }
        
        return response()->json([
            "status" => "Success",
            "categories" => $categories
        ], 200);
    }
}
