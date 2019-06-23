<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CustomersTableSeeder extends Seeder
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
            DB::table('customers')->insert([
                'user_id' => $i,
                'first_name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->unique()->safeEmail,
                'address' => $faker->address,
                'city' => $faker->city,
                'country' => $faker->country,
                'phone_number' => $faker->phoneNumber,
                'fax' => $faker->phoneNumber,
                'created_at' => '2019-06-23 12:00:00'
            ]);
        }
    }
}
