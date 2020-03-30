<!--
=========================================================
Material Dashboard - v2.1.2
=========================================================

Product Page: https://www.creative-tim.com/product/material-dashboard
Copyright 2020 Creative Tim (https://www.creative-tim.com)
Coded by Creative Tim

=========================================================
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="{{  asset('assets/main_template/assets/img/apple-icon.png') }}">
    <link rel="icon" type="image/png" href="{{  asset('assets/main_template/assets/img/favicon.png') }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>
        Sistem Monitoring dan Evaluasi Mahasiswa Pasca Sarjana
    </title>
    <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
    <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link href="{{  asset('assets/main_template/assets/css/material-dashboard.css?v=2.1.2') }}" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="{{  asset('assets/main_template/assets/css/custom.css') }}" />
    <!-- CSS Just for demo purpose, don't include it in your project -->
    <!-- <link href="{{  asset('assets/main_template/assets/demo/demo.css') }}" rel="stylesheet" /> -->
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/vendor/bootstrap/css/bootstrap.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/fonts/iconic/css/material-design-iconic-font.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/vendor/animate/animate.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/vendor/css-hamburgers/hamburgers.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/vendor/animsition/css/animsition.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/auth/vendor/select2/select2.min.css') }}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/auth/vendor/daterangepicker/daterangepicker.css')}}">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{{asset('assets/auth/css/util.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/auth/css/main.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('assets/auth/css/custom.css')}}">
    <!--===============================================================================================-->
</head>

<body class="">
    @component('layouts.loader') @endcomponent
    <div class="outter" style="background-image: url('{{asset('assets/auth/images/bg-01.jpg')}}');">
        <div class="header">
            <h1 class="login-letter">
                SISTEM MONITORING & EVALUASI MAHASISWA PASCASARJANA <br> UNIVERSITAS SYIAH KUALA
            </h1>
        </div>
        <div class="limiter">
            <div class="container-login100">
                <div class="wrap-login100">
                    <div id="container-content">
                        @yield('content')
                    </div>
                </div>
            </div>
        </div>
        <div id="dropDownSelect1"></div>

        @component('layouts.footer') @endcomponent
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/vendor/jquery/jquery-3.2.1.min.js')}}"></script>
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/vendor/animsition/js/animsition.min.js')}}"></script>
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/vendor/bootstrap/js/popper.js')}}"></script>
        <script src="{{asset('assets/auth/vendor/bootstrap/js/bootstrap.min.js')}}"></script>
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/vendor/select2/select2.min.js')}}"></script>
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/vendor/daterangepicker/moment.min.js')}}"></script>
        <script src="{{asset('assets/auth/vendor/daterangepicker/daterangepicker.js')}}"></script>
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/vendor/countdowntime/countdowntime.js')}}"></script>
        <!--===============================================================================================-->
        <script src="{{asset('assets/auth/js/main.js')}}"></script>
        <script>
            $(window).on('load', function() {
                $('.loader').delay(500).fadeOut('slow');
            });
        </script>
    </div>
</body>

</html>