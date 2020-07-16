'use strict'

class PenelitianController {

      async laporan({ auth, view, params }){
            const n_laporan = params.n
            const user  = auth.user
            const data = {
                  'user' : user.toJSON(),
                  'n_laporan' : n_laporan
            }
            return view.render('mahasiswa.penelitian.laporan', data)
      }

      async laporan_upload({ auth, view, params }){
            const n_laporan = params.n
            const user  = auth.user
            const data = {
                  'user' : user.toJSON(),
                  'n_laporan' : n_laporan
            }
            return view.render('mahasiswa.penelitian.laporan_upload', data)
      }

}

module.exports = PenelitianController
