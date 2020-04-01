<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('mahasiswa')->group(function () {
    Route::get('/', 'MahasiswaController@index');
    Route::get('/dashboard', 'MahasiswaController@dashboard')->name('dashboard');
    Route::get('/form', 'MahasiswaController@form')->name('form');
    Route::get('/list', 'MahasiswaController@list')->name('list');
});
