<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Booking;

class BookingController extends Controller
{
    public function index()
    {
        return Booking::with(['room', 'customer'])->get();
    }
 
    public function show($id)
    {
        return Booking::with(['room', 'customer'])->find($id);
    }

    public function store(Request $request)
    {
        return Booking::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::with(['room', 'customer'])->findOrFail($id);
        $booking->update($request->all());

        return $booking;
    }

    public function delete(Request $request, $id)
    {
        $booking = Booking::findOrFail($id);
        $booking->delete();

        return 204;
    }
}
