<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\PesantrenCollection;
use App\Http\Resources\Api\PesantrenResource;
use App\Models\Pesantren;
use Request;

class PesantrenController extends Controller
{
    public function index()
    {
        return new PesantrenCollection(Pesantren::with('programs', 'tingkats')->get());
    }

    public function show(string $slug)
    {
        $pesantren = Pesantren::with('programs', 'tingkats')->where('slug', $slug)->firstOrFail();
        return new PesantrenResource($pesantren);
    }
}