<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;

class RoomController extends Controller
{
    public function index()
    {
        return Room::pimp()->get();
    }
 
    public function show($id)
    {
        return Room::with(['hotel', 'room_type', 'room_capacity'])->find($id);
    }

    public function store(Request $request)
    {
        return Room::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $room = Room::with(['hotel', 'room_type', 'room_capacity'])->findOrFail($id);
        $room->update($request->all());

        return $room;
    }

    public function delete(Request $request, $id)
    {
        $room = Room::findOrFail($id);
        $room->delete();

        return 204;
    }
}
