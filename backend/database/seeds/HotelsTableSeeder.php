<?php

use Illuminate\Database\Seeder;

class HotelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('hotels')->insert([
            'name' => 'The Prince Park Tower Tokyo',
            'address' => '4 Chome-8-1 Shibakoen',
            'city' => 'Minato City',
            'state' => 'Tokyo',
            'country' => 'Japan',
            'zip_code' => '105-8563',
            'phone_number' => '+81 3-5400-1111',
            'email' => 'receptionist@princehotels.com',
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2016/03/08171137/appearance3-theprinceparktowertokyo.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);
    }
}
