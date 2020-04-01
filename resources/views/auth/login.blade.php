@extends('authmain')

@section('content')
<form method="POST" class="login100-form validate-form" action="{{ route('login') }}">
    @csrf
    <!-- <span class="login100-form-logo">
        <i class="zmdi zmdi-landscape"></i>
    </span> -->
    <span>
        <img class="login-logo" src="{{asset('assets/auth/images/unsyiah.png')}}" width="120" height="120" alt="No-image">
    </span>
    <span class="login100-form-title p-b-34 p-t-27">
        Log in
    </span>
    @if(\Session::has('warning'))
    <div class="alert alert-warning">
        <div>{{Session::get('warning')}}</div>
    </div>
    @endif
    @if(\Session::has('alert-success'))
    <div class="alert alert-success">
        <div>{{Session::get('alert-success')}}</div>
    </div>
    @endif
    @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif

    <div class="wrap-input100 validate-input" data-validate="Pilih login sebagai">
        <select class="input100 form-control" name="role">
            <option value="" selected>Pilih login sebagai</option>
            <option value="1">Mahasiswa</option>
            <option value="2">Dosen</option>
            <option value="3">Staff</option>
        </select>
        <span class="focus-input100" data-placeholder="&#xf207;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter username">
        <input class="input100 @error('username') is-invalid @enderror" type="text" name="username" placeholder="Username" value="{{ old('username') }}" autocomplete="username">
        <span class="focus-input100" data-placeholder="&#xf207;"></span>

        @error('username')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
        @enderror
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
        <input class="input100 @error('password') is-invalid @enderror" type="password" name="password" placeholder="Password" autocomplete="current-password">
        <span class="focus-input100" data-placeholder="&#xf191;"></span>

        @error('password')
        <span class="invalid-feedback" role="alert">
            <strong>{{ $message }}</strong>
        </span>
        @enderror
    </div>

    <div class="contact100-form-checkbox">
        <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember" value="1" {{ old("remember") ? 'checked' : '' }}>
        <label class="label-checkbox100" for="ckb1">
            Remember me
        </label>
    </div>

    <div class="container-login100-form-btn">
        <button class="login100-form-btn" type="submit">
            Login
        </button>
    </div>

    <div class="text-center p-t-90">
        @if (Route::has('password.request'))
        <a class="txt1" href="{{ route('password.request') }}">
            Forgot Password?
        </a>
        @endif
    </div>
</form>
@endsection