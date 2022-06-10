<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Item;
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

}
