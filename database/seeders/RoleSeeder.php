<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            [
                'id' => 1,
                'name' => 'Super Admin'
            ],
            [
                'id' => 2,
                'name' => 'Pesantren'
            ],
            [
                'id' => 3.,
                'name' => 'Kontributor'
            ]
        ];

        Role::insert($roles);
    }
}
