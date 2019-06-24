<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $table = 'rooms';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
        'hotel_id',
        'room_type',
        'room_capacity',
        'image',
    ];

    public function hotel()
    {
        return $this->belongsTo('App\Hotel', 'hotel_id');
    }

    public function room_type()
    {
        return $this->belongsTo('App\RoomType', 'room_type');
    }

    public function room_capacity()
    {
        return $this->belongsTo('App\RoomCapacity', 'room_capacity');
    }

    public function booking()
    {
        return $this->hasMany('App\Booking');
    }

    public function price_list()
    {
        return $this->hasOne('App\PriceList');
    }
}
