<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PriceList;

class PriceListController extends Controller
{
    public function index()
    {
        return PriceList::with(['room', 'room_type', 'room_capacity'])->get();
    }
 
    public function show($id)
    {
        return PriceList::with(['room', 'room_type', 'room_capacity'])->find($id);
    }

    public function store(Request $request)
    {
        return PriceList::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $price_list = PriceList::with(['room', 'room_type', 'room_capacity'])->findOrFail($id);
        $price_list->update($request->all());

        return $price_list;
    }

    public function delete(Request $request, $id)
    {
        $price_list = PriceList::findOrFail($id);
        $price_list->delete();

        return 204;
    }
}
