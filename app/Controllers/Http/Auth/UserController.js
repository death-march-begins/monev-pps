'use strict'

const Hash = use('Hash')
const Database = use('Database')

class UserController {

  loginShow({request, response, view}) {
    return view.render('auth.login')
  }

  async login({request, response, auth, session}) {
    const {username, password, role} = request.only(['username', 'password', 'role'])
    const db = await Database.connect('mongodb')

    // Login Mahasiswa
    if( role == 1) {
      const mahasiswa = await db.collection("mahasiswas")
        .findOne({nim: username})

      if(mahasiswa) {
        const passwordVerified = await Hash.verify(password, mahasiswa.password)
        if (passwordVerified) {
          await auth.authenticator('mahasiswa').login(mahasiswa)
          return response.route('mahasiswa.dashboard')
        } else {
          session.flash({
            notification: {
              type: 'danger',
              message: 'Gagal mengautentikasi password'
            }
          })
          return response.redirect('back')
        }
      } else {
        session.flash({
          notification: {
            type: 'danger',
            message: 'Tidak ada mahasiswa yang ditemukan'
          }
        })
        return response.redirect('back')
      }
    } else {
      const promotor = await db.collection("promotors")
        .findOne({nik: username})
      if(promotor) {
        const passwordVerified = await Hash.verify(password, promotor.password)
        if (passwordVerified) {
          await auth.authenticator('promotor').login(promotor)
          return response.route('promotor.dashboard')
        } else {
          session.flash({
            notification: {
              type: 'danger',
              message: 'Gagal mengautentikasi password'
            }
          })
          return response.redirect('back')
        }
      } else {
        session.flash({
          notification: {
            type: 'danger',
            message: 'Tidak ada promotor yang ditemukan'
          }
        })
        return response.redirect('back')
      }
    }
  }
}

module.exports = UserController
