<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->unsignedBigInteger('hotel_id');
            $table->unsignedBigInteger('room_type');
            $table->unsignedBigInteger('room_capacity');
            $table->text('image');
            $table->timestamps();

            $table->foreign('hotel_id')->references('id')->on('hotels');
            $table->foreign('room_type')->references('id')->on('room_types');
            $table->foreign('room_capacity')->references('id')->on('room_capacities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rooms');
    }
}
