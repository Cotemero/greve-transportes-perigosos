@extends('layouts.app')
@section('styles')
@endsection

@section('content')
<div class="container">
    <div class="text-center">
        <img src="/img/VOSTPT_FuelCrisisPT_JNDPA_Logo_With_VOSTPT_Logo_800pxX800px.png" style="width:20em" />
    </div>
    <h2>Reportar Posto de Combustível em Falta</h2>
    <form method="POST" id="modal_form" class="ui form" action="{{ route('error.push') }}">
        <input id="station_id" type="hidden" name="id" value="" />
        <input id="recaptchaResponse" type="hidden" name="captcha" value="0" />
        <div class="form-group">
            <label for="email">O Seu Endereço de Email</label>
            <input type="email" class="form-control" id="email" placeholder="O Seu Endereço de Email" name="email"
                required>
        </div>
        <div class="form-group">
            <label for="station_brand">Marca</label>
            <input type="text" class="form-control" id="station_brand" placeholder="Marca" name="brand" required>
        </div>
        <div class="form-group">
            <label for="station_vostie">VOSTie <small>(Código de controlo interno da VOST Portugal. Se não és voluntário
                    VOST deixa o campo em branco)</small></label>
            <input type="text" class="form-control" id="station_vostie" placeholder="" name="vostie">
        </div>
        <h5>Localização Exata</h5>
        <div class="row">
            <div class="form-group col-6">
                <label for="station_long">Longitude</label>
                <input type="number" step="0.00001" class="form-control" id="station_long" name="long" value="0"
                    required>
            </div>
            <div class="form-group col-6">
                <label for="station_lat">Latitude</label>
                <input type="number" step="0.00001" class="form-control" id="station_lat" name="lat" value="0" required>
            </div>
        </div>
        <div class="form-group">
            <label for="station_sell_gasoline">{{ __('Vende Gasolina?') }}</label>
            <select class="form-control" id="station_sell_gasoline" name="sell_gasoline" required>
                <option value="0">Não</option>
                <option value="1">Sim</option>
            </select>
        </div>
        <div class="form-group">
            <label for="station_sell_diesel">{{ __('Vende Gasóleo?') }}</label>
            <select class="form-control" id="station_sell_diesel" name="sell_diesel" required>
                <option value="0">Não</option>
                <option value="1">Sim</option>
            </select>
        </div>
        <div class="form-group">
            <label for="station_sell_lpg">{{ __('Vende GPL?') }}</label>
            <select class="form-control" id="station_sell_lpg" name="sell_lpg" required>
                <option value="0">Não</option>
                <option value="1">Sim</option>
            </select>
        </div>
        <div class="modal-footer">
            <div class="form-group">
                <button type="submit" class="btn btn-primary">Reportar</button>
            </div>
        </div>
    </form>
</div>
@endsection

@section('javascript')
<script src="https://www.google.com/recaptcha/api.js?render=6LcD9rAUAAAAAIn4-wNkOpAmr49ItnAZnBtroGCX"></script>
<script>
    grecaptcha.ready(function () {
    grecaptcha.execute('6LcD9rAUAAAAAIn4-wNkOpAmr49ItnAZnBtroGCX', { action: 'contact' }).then(function (token) {
        var recaptchaResponse = document.getElementById('recaptchaResponse');
        recaptchaResponse.value = token;
    });
});
</script>
@endsection