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
}
