<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    // Add Category
    public function addCategory(Request $request){
        $category = new Category;
        $category->name = $request->name;
        $category->save();
        
        return response()->json([
            "status" => "Success",
            "category" => $category
        ], 200);
    }

    // Edit Category
    public function updateCategory($id, Request $request){

        $category = Category::find($id);
        $category->name = $request->name;
        $category->save();

        return response()->json([
            "status" => "Success",
            "category" => $category
        ], 200);
    }

    // Remove Category
    public function removeCategory($id){

        $category = Category::find($id);
        $category->delete();

        return response()->json([
            "status" => "Success",
            "category removed" => $category
        ], 200);
    }

    //Display Categories
    public function displayCategories() {
        $categories = Category::all();
        
        return response()->json([
            "status" => "Success",
            "categories" => $categories
        ], 200);
    }
}
