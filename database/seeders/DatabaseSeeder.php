<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Pesantren;
use App\Models\Program;
use App\Models\Tingkat;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        // Program::factory(5)->create();
        // Tingkat::factory(3)->create();
        // Pesantren::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            UserSeeder::class,
            PermissionSeeder::class,
            RoleSeeder::class,
            RolePermissionTableSeeder::class,
            RoleUserTableSeeder::class,
            ProgramSeeder::class,
            TingkatSeeder::class,
        ]);
    }
}
