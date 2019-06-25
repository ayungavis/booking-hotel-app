<?php

use Illuminate\Http\Request;

use App\Booking;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('jwt.auth')->get('users', function(Request $request) {
//     return auth()->user();
// });

Route::post('auth/register', 'AuthController@register');
Route::post('auth/login', 'AuthController@login');

Route::group(['middleware' => 'jwt.auth'], function() {
    // Authentication
    Route::get('auth/check', 'AuthController@check');
    Route::post('auth/logout', 'AuthController@logout');

    // Booking
    Route::get('bookings', 'BookingController@index');
    Route::get('bookings/{id}', 'BookingController@show');
    Route::post('bookings', 'BookingController@store');
    Route::put('bookings/{id}', 'BookingController@update');
    Route::delete('bookings/{id}', 'BookingController@delete');

    // Customer
    Route::get('customers', 'CustomerController@index');
    Route::get('customers/{id}', 'CustomerController@show');
    Route::post('customers', 'CustomerController@store');
    Route::put('customers/{id}', 'CustomerController@update');
    Route::delete('customers/{id}', 'CustomerController@delete');

    // Hotel
    Route::get('hotels', 'HotelController@index');
    Route::get('hotels/{id}', 'HotelController@show');
    Route::post('hotels', 'HotelController@store');
    Route::put('hotels/{id}', 'HotelController@update');
    Route::delete('hotels/{id}', 'HotelController@delete');

    // Price List
    Route::get('price-lists', 'PriceListController@index');
    Route::get('price-lists/{id}', 'PriceListController@show');
    Route::post('price-lists', 'PriceListController@store');
    Route::put('price-lists/{id}', 'PriceListController@update');
    Route::delete('price-lists/{id}', 'PriceListController@delete');

    // Room
    Route::get('rooms', 'RoomController@index');
    Route::get('rooms/{id}', 'RoomController@show');
    Route::post('rooms', 'RoomController@store');
    Route::put('rooms/{id}', 'RoomController@update');
    Route::delete('rooms/{id}', 'RoomController@delete');

    // Room Capacity
    Route::get('room-capacities', 'RoomCapacityController@index');
    Route::get('room-capacities/{id}', 'RoomCapacityController@show');
    Route::post('room-capacities', 'RoomCapacityController@store');
    Route::put('room-capacities/{id}', 'RoomCapacityController@update');
    Route::delete('room-capacities/{id}', 'RoomCapacityController@delete');

    // Room Type
    Route::get('room-types', 'RoomTypeController@index');
    Route::get('room-types/{id}', 'RoomTypeController@show');
    Route::post('room-types', 'RoomTypeController@store');
    Route::put('room-types/{id}', 'RoomTypeController@update');
    Route::delete('room-types/{id}', 'RoomTypeController@delete');
});
