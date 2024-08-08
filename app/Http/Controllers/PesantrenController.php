<?php

namespace App\Http\Controllers;

use App\Models\Pesantren;
use App\Models\Program;
use App\Models\Tingkat;
use App\Models\User;
use Illuminate\Http\Request;

class PesantrenController  extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $pesantren = Pesantren::all();

        return inertia('Pesantren/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::hasPesantrenEditPermission()->get();
        $program = Program::all();
        $tingkat = Tingkat::all();

        return inertia('Pesantren/Create', [
            'users' => $users,
            'program' => $program,
            'tingkat' => $tingkat,
        ]);
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
