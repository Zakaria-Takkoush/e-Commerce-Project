<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Item;
use App\Models\Category;
use Faker\Calculator\Iban;
use Illuminate\Http\Request;

class AdminItemController extends Controller
{
    // Add Item
    public function addItem(Request $request){
        $item = new Item;
        $item->name = $request->name;
        $item->price = $request->price;
        $item->cat_id = $request->cat_id;
        $item->save();
        
        return response()->json([
            "status" => "Success",
            "item" => $item
        ], 200);
    }

    // Edit Item
    public function updateItem($id, Request $request){

        $item = Item::find($id);
        $item->name = $request->name;
        $item->price = $request->price;
        $item->cat_id = $request->cat_id;
        $item->save();

        return response()->json([
            "status" => "Success",
            "item" => $item
        ], 200);
    }

    // Delete Item
    public function removeItem($id){

        $item = Item::find($id);
        $item->delete();

        return response()->json([
            "status" => "Success",
            "item removed" => $item
        ], 200);
    }

    // Display Items
    public function diaplayItems(){
        // $items = Item::with("category")->get();
        $items = Item::join("categories", "categories.id","=","items.cat_id")
        ->get(["items.*", "categories.name as cat_name"]);

        return response()->json([
            "status" => "Success",
            "items" => $items
        ], 200);
    }
}

    