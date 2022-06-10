<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Item;

class UserItemController extends Controller
{
    // Display Items in a certain category
    public function landingItems($cat_id){
        $items = Item::where("cat_id", $cat_id)->get();
        // $items = Item::join("categories", "categories.id","=","items.cat_id")
        // ->get(["items.*", "categories.name as cat_name"]);

        return response()->json([
            "status" => "Success",
            "items in Category" => $items
        ], 200);
    }

    // Get a specific item
    public function getItem($id){
        // $item = Item::where("id", $id)->get();
        $item = Item::find($id);

        return response()->json([
            "status" => "Success",
            "item" => $item
        ], 200);
    }
}
