<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\FuelStation;
use Illuminate\Support\Facades\Storage;

class FuelStationsController extends Controller
{
    //
    public function updateCache()
    {
        $json = FuelStation::all('name', 'brand', 'usage', 'district', 'county', 'address', 'long', 'lat', 'repa', 'sell_gasoline', 'sell_diesel', 'sell_lpg', 'has_gasoline', 'has_diesel', 'has_lpg')->toJson();
        Storage::disk('public')->put('data/cache.json', $json);
        //TODO: Clear Cloudflare Cache
    }

    public function list()
    {
        if (Option::find('stress_lockdown')->value == 0) {
            return response()->view('stations/list');
        } else {
            return response('Feature Disabled due to Stress Lockdown (Disable at Options)', 200)->header('Content-Type', 'text/plain');
        }
    }

    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'id'             => 'required|exists:entries',
            'name'           => 'required',
            'brand'          => 'required',
            'sells_gasoline' => 'required',
            'sells_diesel'   => 'required',
            'sells_lpg'      => 'required',
            'repa'           => 'required',
        ]);
        try {
            $fuel_station = FuelStation::findOrFail($validatedData['id']);
            unset($validatedData['id']);
            $fuel_station->update($validatedData);
            $this->updateCache();
            return redirect('stations/list')->with('status', 'Estação Atualizada!');
        } catch (Exception $e) {
            return redirect('stations/list')->with('status', 'Erro ao atualizar estação!');
        }
    }

    public function fetch_all()
    {
        $stations_final = [];
        $stations       = FuelStation::all();
        foreach ($stations as $station) {
            $stations_final[] = [
                'id'            => $station->id,
                'name'          => $station->name,
                'brand'         => $station->brand,
                'sell_gasoline' => $station->sell_gasoline,
                'sell_diesel'   => $station->sell_diesel,
                'sell_lpg'      => $station->sell_lpg,
                'repa'          => $station->repa,
                'lat'           => $station->lat,
                'long'          => $station->long,
            ];
        }
        return response()->json(['data' => $stations_final]);
    }
}
