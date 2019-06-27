<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Response;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        return User::pimp()->get();
    }
 
    public function show($id)
    {
        return User::find($id);
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());

        return $user;
    }

    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return 204;
    }
}
