<?php

use Illuminate\Database\Seeder;

class RoomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rooms')->insert([
            'name' => 'Prince Suite',
            'hotel_id' => 1,
            'room_type' => 4,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2019/06/10163804/princesuite-noon-room-the-prince-parktower-tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Harbor Royal Suite',
            'hotel_id' => 1,
            'room_type' => 4,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2017/01/20133628/Harbor-Royal-Suite-Room-1-The-Prince-Park-Tower-Tokyo1-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Premium Jr. Suite King',
            'hotel_id' => 1,
            'room_type' => 5,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2016/10/12161856/Junior-Suite-King-Room2-The-Prince-Parktower-Tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Premium Corner King Room',
            'hotel_id' => 1,
            'room_type' => 6,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2016/10/12161937/PremiumCorner-Suite-King-Room2-The-Prince-Parktower-Tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Panoramic Twin Room',
            'hotel_id' => 1,
            'room_type' => 8,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2017/08/17112253/panoramic-pnrtwin-room-renewal-01-the-prince-parktower-tokyo1-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Park Suite',
            'hotel_id' => 1,
            'room_type' => 4,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2018/04/25163212/parksuiteliving-room-the-prince-parktower-tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Connecting Room',
            'hotel_id' => 1,
            'room_type' => 9,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2018/04/25163156/deluxtwindaytime-room-the-prince-parktower-tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Deluxe Twin Room',
            'hotel_id' => 1,
            'room_type' => 8,
            'room_capacity' => 2,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2018/04/25163204/deluxtwinnight-room-the-prince-parktower-tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Garden Suite A',
            'hotel_id' => 1,
            'room_type' => 4,
            'room_capacity' => 2,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2016/08/19130743/Garden-Suite-RoomA-1-Living-The-Prince-Parktower-Tokyo-800x520s-s--800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);

        DB::table('rooms')->insert([
            'name' => 'Park Twin Room',
            'hotel_id' => 1,
            'room_type' => 8,
            'room_capacity' => 1,
            'image' => 'http://dbcsbtkdwdgj7.cloudfront.net/wp-content/uploads/sites/7/2018/04/25163220/parktwin-room-the-prince-parktower-tokyo-800x520.jpg',
            'created_at' => '2019-06-23 12:00:00'
        ]);
    }
}
