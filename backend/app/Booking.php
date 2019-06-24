<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = 'bookings';
    protected $primaryKey = 'id';

    protected $fillable = [
        'room_id',
        'date_start',
        'date_end',
        'customer_id'
    ];

    public function room()
    {
        return $this->belongsTo('App\Room', 'room_id');
    }

    public function customer()
    {
        return $this->belongsTo('App\Customer', 'customer_id');
    }
}
