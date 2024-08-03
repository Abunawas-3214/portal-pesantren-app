<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pesantrens', function (Blueprint $table) {
            $table->uuid('id')->index();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('pendiri');
            $table->string('pengasuh');
            $table->datetime('tanggal_berdiri');
            $table->text('deskripsi');
            $table->enum('gender', ['putra', 'putri', 'putra_putri']);
            $table->string('program_unggulan')->nullable();
            $table->string('contact');
            $table->string('logo')->nullable();
            $table->string('video_profil')->nullable();
            $table->string('foto_sampul')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesantrens');
    }
};
