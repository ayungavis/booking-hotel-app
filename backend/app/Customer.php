<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jedrzej\Pimpable\PimpableTrait;

class Customer extends Model
{
    use PimpableTrait;

    protected $table = 'customers';
    protected $primaryKey = 'id';

    protected $sortParameterName = 'sortBy';

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
