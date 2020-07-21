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
  Route.get('/rencana-penelitian', 'Mahasiswa/RencanaPenelitianController.index').as('mahasiswa.rencana-penelitian')
  Route.post('/rencana-penelitian', 'Mahasiswa/RencanaPenelitianController.sendFormRencana').as('mahasiswa.send-form')
  Route.get('/proposal/pengajuan', 'Mahasiswa/ProposalController.pengajuanIndex').as('mahasiswa.pengajuan-proposal')
  Route.get('/proposal/seminar', 'Mahasiswa/ProposalController.seminarIndex').as('mahasiswa.pengajuan-seminar')
}).prefix('mahasiswa').middleware(['auth:mahasiswa'])


// Route Promotor
Route.group(() => {
  Route.get('/dashboard', 'Promotor/PromotorController.dashboard').as('promotor.dashboard')
  Route.get('/dashboard/mhs/:id', 'Promotor/PromotorController.getLamanMhs').as('promotor.mhs-bimbingan')
}).prefix('promotor').middleware(['auth:promotor'])
