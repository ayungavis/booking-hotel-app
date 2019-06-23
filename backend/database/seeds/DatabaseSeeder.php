<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            HotelsTableSeeder::class,
            RoomCapacitiesTableSeeder::class,
            RoomTypesTableSeeder::class,
            RoomsTableSeeder::class,
            UsersTableSeeder::class,
            CustomersTableSeeder::class,
            BookingsTableSeeder::class
        ]);
    }
}
