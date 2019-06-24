<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'email',
        'address',
        'city',
        'country',
        'phone_number',
        'fax',
    ];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    public function booking()
    {
        return $this->hasMany('App\Booking');
    }
}
