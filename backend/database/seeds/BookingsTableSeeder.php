<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class BookingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i = 1; $i <= 10; $i++) { 
            DB::table('bookings')->insert([
                'room_id' => $faker->randomDigitNotNull,
                'date_start' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'date_end' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'customer_id' => $i,
                'created_at' => '2019-06-23 12:00:00'
            ]);
        }
    }
}
