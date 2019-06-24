<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jedrzej\Pimpable\PimpableTrait;

class RoomCapacity extends Model
{
    use PimpableTrait;

    protected $table = 'room_capacities';
    protected $primaryKey = 'id';

    protected $sortParameterName = 'sortBy';

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
