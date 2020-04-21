'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.get('/', 'HomeController.index')

//Route Auth
Route.group(() => {
  Route.get('/login', 'Auth/UserController.loginShow').as('login.show').middleware(['authenticated'])
  Route.post('/login', 'Auth/UserController.login').as('login.store')
  Route.post('/register/mhs', 'Auth/RegisterController.registerMhs')
  Route.post('/register/promotor', 'Auth/RegisterController.registerPromotor')
  Route.get('/logout', 'Auth/AuthenticatedController.logout').as('logout.all')
}).prefix('users')


// Route Mahasiswa
Route.group(() => {
  Route.get('/dashboard', 'Mahasiswa/DashboardController.index').as('mahasiswa.dashboard')
  Route.get('/dashboard/form-pengajuan', 'Mahasiswa/DashboardController.formPenelitian').as('mahasiswa.form-penelitian')
  Route.post('/dashboard/form-pengajuan', 'Mahasiswa/DashboardController.sendForm').as('mahasiswa.send-form')
}).prefix('mahasiswa').middleware(['auth:mahasiswa'])


// Route Promotor
Route.group(() => {
  Route.get('/dashboard', 'Promotor/DashboardController.index').as('promotor.dashboard')
}).prefix('promotor').middleware(['auth:promotor'])
