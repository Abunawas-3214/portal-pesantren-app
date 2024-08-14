<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\PesantrenResource;
use App\Models\Pesantren;

class PesantrenController extends Controller
{
    public function index()
    {
        $pesantren = PesantrenResource::collection(Pesantren::with('programs', 'tingkats')->get());
        return response()->json($pesantren);
    }
}