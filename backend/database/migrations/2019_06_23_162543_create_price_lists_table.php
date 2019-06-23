<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePriceListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('price_lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('room_id');
            $table->unsignedBigInteger('room_type');
            $table->unsignedBigInteger('room_capacity');
            $table->float('regular_price');
            $table->float('dynamic_price');
            $table->date('date_start');
            $table->date('date_end');
            $table->timestamps();

            $table->foreign('room_id')->references('id')->on('rooms');
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
        Schema::dropIfExists('price_lists');
    }
}
