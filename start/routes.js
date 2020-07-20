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

  Route.get('/seminar-hasil', 'Mahasiswa/SeminarHasilController.index').as('mahasiswa.seminar-hasil')
  Route.post('/seminar-hasil/pengajuan', 'Mahasiswa/SeminarHasilController.sendForm').as('mahasiswa.seminar-hasil.sendForm')

  Route.get('/ujian-tertutup', 'Mahasiswa/UjianTertutupController.index').as('mahasiswa.ujian-tertutup')
  Route.get('/rekap-nilai', 'Mahasiswa/RekapNilaiController.index').as('mahasiswa.rekap-nilai')
  Route.get('/penelitian/laporan/:n/upload', 'Mahasiswa/PenelitianController.laporan_upload').as('mahasiswa.penelitian.laporan.upload')
  Route.get('/penelitian/laporan/:n', 'Mahasiswa/PenelitianController.laporan').as('mahasiswa.penelitian.laporan')
  Route.get('/rencana-penelitian/form-rencana', 'Mahasiswa/RencanaPenelitianController.formRencanaIndex').as('mahasiswa.form-rencana')
  Route.post('/rencana-penelitian/form-rencana', 'Mahasiswa/RencanaPenelitianController.sendFormRencana').as('mahasiswa.send-form')
  Route.get('/proposal/pengajuan', 'Mahasiswa/ProposalController.pengajuanIndex').as('mahasiswa.pengajuan-proposal')
  Route.get('/proposal/seminar', 'Mahasiswa/ProposalController.seminarIndex').as('mahasiswa.pengajuan-seminar')
}).prefix('mahasiswa').middleware(['auth:mahasiswa'])


// Route Promotor
Route.group(() => {
  Route.get('/dashboard', 'Promotor/PromotorController.dashboard').as('promotor.dashboard')
  Route.get('/dashboard/mhs/:id', 'Promotor/PromotorController.getLamanMhs').as('promotor.mhs-bimbingan')
}).prefix('promotor').middleware(['auth:promotor'])
