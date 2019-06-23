<?php

use Illuminate\Database\Seeder;

class RoomCapacitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('room_capacities')->insert([
            'name' => 'Standard',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_capacities')->insert([
            'name' => 'Deluxe',
            'created_at' => '2019-06-23 12:00:00'
        ]);
    }
}
