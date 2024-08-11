<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePesantrenRequest;
use App\Http\Requests\UpdatePesantrenRequest;
use App\Models\Media;
use App\Models\Pesantren;
use App\Models\Program;
use App\Models\Tingkat;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PesantrenController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pesantrenData = Pesantren::with('user', 'programs', 'tingkats')->get();

        return inertia('Pesantren/Index', [
            'pesantrenData' => $pesantrenData
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::HasPesantrenEditPermissionAndNoPesantren()->get();

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
    public function store(StorePesantrenRequest $request)
    {
        $pesantren = new Pesantren;
        $uuid = Str::uuid()->__tostring();
        $pesantren->id = $uuid;
        $pesantren->fill($request->validated());


        if ($request->hasFile('logo')) {
            $logo = $request->file('logo');
            $filename = $request->slug . '.' . $logo->getClientOriginalExtension();
            $pathLogo = $logo->storeAs('public/logo', $filename);
            $pesantren->logo = $pathLogo;
        }

        if ($request->hasFile('foto_sampul')) {
            $foto_sampul = $request->file('foto_sampul');
            $filename = $request->slug . '.' . $foto_sampul->getClientOriginalExtension();
            $pathFotoSampul = $foto_sampul->storeAs('public/foto_sampul', $filename);
            $pesantren->foto_sampul = $pathFotoSampul;
        }

        $pesantren->save();

        $pesantren = Pesantren::find($uuid);

        $media = new Media([
            'pesantren_id' => $pesantren->id,
        ]);

        $pesantren->media()->save($media);

        $pesantren->programs()->attach($request->program);
        $pesantren->tingkats()->attach($request->tingkat);

        return redirect()->route('pesantren.index');
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
        $users = User::HasPesantrenEditPermissionAndNoPesantren()->get();
        $users = $users->push(User::find($pesantren->user_id));

        $program = Program::all();
        $tingkat = Tingkat::all();

        $pesantren = Pesantren::with('user', 'programs', 'tingkats')->find($pesantren->id);

        return inertia('Pesantren/Edit', [
            'users' => $users,
            'program' => $program,
            'tingkat' => $tingkat,
            'pesantren' => $pesantren
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePesantrenRequest $request, Pesantren $pesantren)
    {
        // dd($request->all());
        if ($pesantren->slug != $request->slug) {
            if ($pesantren->validasi()) {
                rename(storage_path("app/public/validasi/{$pesantren->slug}"), storage_path("app/public/validasi/{$request->slug}"));
                if ($pesantren->validasi()->where('kategori_validasi', 'kemenag')->first()) {
                    $pesantren->validasi()->where('kategori_validasi', 'kemenag')->first()->update([
                        'file' => "public/validasi/{$request->slug}/kemenag.pdf"
                    ]);
                }
                if ($pesantren->validasi()->where('kategori_validasi', 'rmi')->first()) {
                    $pesantren->validasi()->where('kategori_validasi', 'rmi')->first()->update([
                        'file' => "public/validasi/{$request->slug}/rmi.pdf"
                    ]);
                }
            }
        }

        $pesantren->update($request->validated());

        if ($request->hasFile('logo')) {
            if ($pesantren->logo) {
                Storage::delete($pesantren->logo);
            }
            $logo = $request->file('logo');
            $filename = $request->slug . '.' . $logo->getClientOriginalExtension();
            $pathLogo = $logo->storeAs('public/logo', $filename);
            $pesantren->logo = $pathLogo;
            $pesantren->save();
        }

        if ($request->hasFile('foto_sampul')) {
            if ($pesantren->foto_sampul) {
                Storage::delete($pesantren->foto_sampul);
            }
            $foto_sampul = $request->file('foto_sampul');
            $filename = $request->slug . '.' . $foto_sampul->getClientOriginalExtension();
            $pathFotoSampul = $foto_sampul->storeAs('public/foto_sampul', $filename);
            $pesantren->foto_sampul = $pathFotoSampul;
            $pesantren->save();
        }

        $pesantren->programs()->sync($request->program);
        $pesantren->tingkats()->sync($request->tingkat);

        return redirect()->route('pesantren.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pesantren $pesantren)
    {
        if ($pesantren->logo) {
            Storage::delete($pesantren->logo);
        }
        if ($pesantren->foto_sampul) {
            Storage::delete($pesantren->foto_sampul);
        }

        if ($pesantren->validasi()) {
            Storage::deleteDirectory("public/validasi/{$pesantren->slug}");
        }

        $pesantren->delete();
        return redirect()->route('pesantren.index');
    }
}
