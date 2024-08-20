<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\PesantrenCollection;
use App\Http\Resources\Api\PesantrenResource;
use App\Models\Pesantren;
use Illuminate\Http\Request;

class PesantrenController extends Controller
{
    public function index(Request $request)
    {
        $query = Pesantren::with('programs', 'tingkats');

        if ($request->has('search')) {
            $searchTerm = $request->input('search');
            $query->where('name', 'like', "%{$searchTerm}%");
        }

        if($request->has('gender')){
            
        }

        $pesantrens = $query->get();

        return new PesantrenCollection($pesantrens);

        // return new PesantrenCollection(Pesantren::with('programs', 'tingkats')->get());
    }

    public function show(string $slug)
    {
        $pesantren = Pesantren::with('programs', 'tingkats', 'media', 'photos', 'validasi')->where('slug', $slug)->firstOrFail();
        return new PesantrenResource($pesantren);
    }
}