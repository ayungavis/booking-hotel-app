<?php

use Illuminate\Database\Seeder;

class RoomTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('room_types')->insert([
            'name' => 'Single',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([ 
            'name' => 'Double',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Family',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Master Suite',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Junior Suite',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'King',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Queen',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Twin',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Connecting Room',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('room_types')->insert([
            'name' => 'Studio',
            'created_at' => '2019-06-23 12:00:00'
        ]);
    }
}
