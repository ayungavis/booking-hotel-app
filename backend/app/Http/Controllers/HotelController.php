<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hotel;

class HotelController extends Controller
{
    public function index()
    {
        return Hotel::pimp()->get();
    }
 
    public function show($id)
    {
        return Hotel::find($id);
    }

    public function store(Request $request)
    {
        return Hotel::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->update($request->all());

        return $hotel;
    }

    public function delete(Request $request, $id)
    {
        $hotel = Hotel::findOrFail($id);
        $hotel->delete();

        return 204;
    }
}
