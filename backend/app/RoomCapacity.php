<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoomCapacity extends Model
{
    protected $table = 'room_capacities';
    protected $primaryKey = 'id';

    protected $fillable = [
        'name',
    ];

    public function price_list()
    {
        return $this->hasMany('App\PriceList');
    }

    public function room()
    {
        return $this->hasMany('App\Room');
    }
}
