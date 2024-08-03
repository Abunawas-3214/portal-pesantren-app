<?php

namespace App\Http\Controllers;

use App\Models\Pesantren;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class PesantrenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Pesantren/Index', [
            'pesantren' => [
                'nama' => 'Pesantrennya afrijal',
                'alamat' => 'Jl. Kebon Jeruk',
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pesantren $pesantren)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pesantren $pesantren)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pesantren $pesantren)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pesantren $pesantren)
    {
        //
    }
}
