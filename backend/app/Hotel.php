<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Jedrzej\Pimpable\PimpableTrait;

class Hotel extends Model
{
    use PimpableTrait;

    protected $table = 'hotels';
    protected $primaryKey = 'id';

    protected $sortParameterName = 'sortBy';

    protected $fillable = [
        'name',
        'address',
        'city',
        'state',
        'country',
        'zip_code',
        'phone_number',
        'email',
        'image',
    ];

    public function room()
    {
        return $this->hasMany('App\Room');
    }
}
