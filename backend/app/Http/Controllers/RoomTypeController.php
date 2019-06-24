<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RoomType;

class RoomTypeController extends Controller
{
    public function index()
    {
        return RoomType::pimp()->get();
    }
 
    public function show($id)
    {
        return RoomType::find($id);
    }

    public function store(Request $request)
    {
        return RoomType::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $room_type = RoomType::findOrFail($id);
        $room_type->update($request->all());

        return $room_type;
    }

    public function delete(Request $request, $id)
    {
        $room_type = RoomType::findOrFail($id);
        $room_type->delete();

        return 204;
    }
}
