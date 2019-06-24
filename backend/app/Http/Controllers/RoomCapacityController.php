<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RoomCapacity;

class RoomCapacityController extends Controller
{
    public function index()
    {
        return RoomCapacity::all();
    }
 
    public function show($id)
    {
        return RoomCapacity::find($id);
    }

    public function store(Request $request)
    {
        return RoomCapacity::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $room_capacity = RoomCapacity::findOrFail($id);
        $room_capacity->update($request->all());

        return $room_capacity;
    }

    public function delete(Request $request, $id)
    {
        $room_capacity = RoomCapacity::findOrFail($id);
        $room_capacity->delete();

        return 204;
    }
}
