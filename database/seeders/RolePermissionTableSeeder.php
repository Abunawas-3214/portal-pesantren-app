<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolePermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin_permissions = Permission::all();

        $pesantren_permission = Permission::whereIn('name', [
            'post_create',
            'post_edit',
            'post_show_self',
            'post_delete',
            'post_access',
            'pesantren_edit',
            'pesantren_show_self',
            'pesantren_access',
        ])->get();

        $kontributor_permission = Permission::whereIn('name', [
            'post_create',
            'post_edit',
            'post_show_self',
            'post_delete',
            'post_access',
        ])->get();

        Role::find(1)->permissions()->attach($admin_permissions);
        Role::find(2)->permissions()->attach($pesantren_permission);
        Role::find(3)->permissions()->attach($kontributor_permission);
    }
}
