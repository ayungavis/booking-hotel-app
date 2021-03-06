<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jedrzej\Pimpable\PimpableTrait;

class PriceList extends Model
{
    use PimpableTrait;

    protected $table = 'price_lists';
    protected $primaryKey = 'id';

    protected $sortParameterName = 'sortBy';

    protected $fillable = [
        'room_id',
        'room_type',
        'room_capacity',
        'regular_price',
        'dynamic_price',
        'date_start',
        'date_end'
    ];

    public function room()
    {
        return $this->belongsTo('App\Room', 'room_id');
    }

    public function room_type()
    {
        return $this->belongsTo('App\RoomType', 'room_type');
    }

    public function room_capacity()
    {
        return $this->belongsTo('App\RoomCapacity', 'room_capacity');
    }
}
