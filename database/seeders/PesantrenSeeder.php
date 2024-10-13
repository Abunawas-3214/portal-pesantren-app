<?php

namespace Database\Seeders;

use App\Models\Media;
use App\Models\Pesantren;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PesantrenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $faker = \Faker\Factory::create();

        // for ($i = 6; $i <= 100; $i++) {
        //     Pesantren::create([
        //         'id' => $faker->uuid(),
        //         'name' => $faker->company(),
        //         'slug' => $faker->slug(),
        //         'user_id' => $i,
        //     ]);
        // }

        // $pesantrens = Pesantren::all();
        // $kecamatans = ['lowokwaru', 'blimbing', 'kedungkandang', 'klojen', 'sukun'];
        // $gender = ['putra', 'putri', 'putra_putri'];

        // foreach ($pesantrens as $pesantren) {
        //     $pesantren->update([
        //         'kecamatan' => $kecamatans[array_rand($kecamatans)],
        //         'gender' => $gender[array_rand($gender)],

        //     ]);

        //     $programIds = [1, 2];
        //     $randomProgramIds = array_slice($programIds, 0, rand(1, 2));
        //     $pesantren->programs()->sync($randomProgramIds);

        //     $tingkatIds = [1, 2, 3, 4];
        //     $randomTingkatIds = array_slice($tingkatIds, 0, rand(1, 4));
        //     $pesantren->tingkats()->sync($randomTingkatIds);
        // }


        // $faker = \Faker\Factory::create('id_ID');

        // $pesantrens = Pesantren::all();

        // foreach ($pesantrens as $pesantren) {
        //     $pesantren->update([
        //         'alamat' => $faker->address,
        //     ]);
        // }


        // $faker = \Faker\Factory::create();

        $pesantrens = Pesantren::all();

        foreach ($pesantrens as $pesantren) {
            Media::create([
                'pesantren_id' => $pesantren->id,
            ]);
        }
    }
}
