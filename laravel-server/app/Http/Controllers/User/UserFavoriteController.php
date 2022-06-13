<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use Illuminate\Http\Request;

class UserFavoriteController extends Controller
{
    // Add an item to favorites
    public function addFavorite(Request $request) {
        $fav = new Favorite();
        $fav->user_id = $request->user_id;
        $fav->item_id = $request->item_id;
        $fav->save();

        return response()->json([
            "status" => "Success",
            "favorite" => $fav
        ], 200);
    }

    // Get All User Favorites
    public function getFavorites($id) {
        // Retroeve all favorites where the ID passed is the user ID
        $favs = Favorite::where("user_id", $id)->get();
        // $favs = Favorite::join("items", "items.id","=","favorites.item_id")
        // ->get(["favorites.*", "items.name as item_name", "items.price as item_price"]);

        return response()->json([
            "status" => "Success",
            "favorites" => $favs
        ], 200);
    }

    //Remove an item from favorites
    public function removeFavorite($user_id, $item_id){

        // pass the user_id and item id to delete the favorite
        $fav = Favorite::where("user_id", $user_id)
                    ->where('item_id', $item_id)
                    ->get();

        $fav->each->delete();

        return response()->json([
            "status" => "Success",
            "favorite removed" => $fav
        ], 200);
    }
}
