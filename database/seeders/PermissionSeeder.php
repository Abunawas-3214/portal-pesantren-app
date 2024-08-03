<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            [
                'name' => 'user_create',
                'description' => 'Membuat user baru',
            ],
            [
                'name' => 'user_edit',
                'description' => 'Mengubah user',
            ],
            [
                'name' => 'user_show',
                'description' => 'Menampilkan daftar user',
            ],
            [
                'name' => 'user_delete',
                'description' => 'Menghapus user',
            ],
            [
                'name' => 'user_access',
                'description' => 'Mengakses menu user',
            ],




            [
                'name' => 'role_create',
                'description' => 'Membuat role baru',
            ],
            [
                'name' => 'role_edit',
                'description' => 'Mengubah role',
            ],
            [
                'name' => 'role_show',
                'description' => 'Menampilkan daftar role',
            ],
            [
                'name' => 'role_delete',
                'description' => 'Menghapus role',
            ],
            [
                'name' => 'role_access',
                'description' => 'Mengakses menu role',
            ],




            [
                'name' => 'category_create',
                'description' => 'Membuat category baru',
            ],
            [
                'name' => 'category_edit',
                'description' => 'Mengubah category',
            ],
            [
                'name' => 'category_show',
                'description' => 'Menampilkan daftar category',
            ],
            [
                'name' => 'category_delete',
                'description' => 'Menghapus category',
            ],
            [
                'name' => 'category_access',
                'description' => 'Mengakses menu category',
            ],




            [
                'name' => 'post_create',
                'description' => 'Membuat post baru',
            ],
            [
                'name' => 'post_edit',
                'description' => 'Mengubah post',
            ],
            [
                'name' => 'post_show',
                'description' => 'Menampilkan daftar post',
            ],
            [
                'name' => 'post_delete',
                'description' => 'Menghapus post',
            ],
            [
                'name' => 'post_access',
                'description' => 'Mengakses menu post',
            ],




            [
                'name' => 'pesantren_create',
                'description' => 'Membuat pesantren baru',
            ],
            [
                'name' => 'pesantren_edit',
                'description' => 'Mengubah pesantren',
            ],
            [
                'name' => 'pesantren_show',
                'description' => 'Menampilkan daftar pesantren',
            ],
            [
                'name' => 'pesantren_delete',
                'description' => 'Menghapus pesantren',
            ],
            [
                'name' => 'pesantren_access',
                'description' => 'Mengakses menu pesantren',
            ],




            [
                'name' => 'program_create',
                'description' => 'Membuat program baru',
            ],
            [
                'name' => 'program_edit',
                'description' => 'Mengubah program',
            ],
            [
                'name' => 'program_show',
                'description' => 'Menampilkan daftar program',
            ],
            [
                'name' => 'program_delete',
                'description' => 'Menghapus program',
            ],
            [
                'name' => 'program_access',
                'description' => 'Mengakses menu program',
            ],




            [
                'name' => 'tingkat_create',
                'description' => 'Membuat tingkat baru',
            ],
            [
                'name' => 'tingkat_edit',
                'description' => 'Mengubah tingkat',
            ],
            [
                'name' => 'tingkat_show',
                'description' => 'Menampilkan daftar tingkat',
            ],
            [
                'name' => 'tingkat_delete',
                'description' => 'Menghapus tingkat',
            ],
            [
                'name' => 'tingkat_access',
                'description' => 'Mengakses menu tingkat',
            ],

        ];

        Permission::insert($permissions);
    }
}
