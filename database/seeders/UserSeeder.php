<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $users = [
        //     [
        //         'name' => 'admin',
        //         'email' => 'admin@mail.com',
        //         'password' => bcrypt('admin123'),
        //     ],
        // ];

        // User::insert($users);

        // Create 100 random users using factory
        // User::factory()->count(100)->create();


        // Seed role_user table
        $roleUserData = [];
        for ($userId = 6; $userId <= 105; $userId++) {
            $roleUserData[] = [
                'role_id' => 2,
                'user_id' => $userId,
            ];
        }
        \DB::table('role_user')->insert($roleUserData);
    }
}
