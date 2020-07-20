'use strict'

class RekapNilaiController {

      async index({ auth, view }){
            const user  = auth.user
            const data = {
                  'user' : user.toJSON()
            }
            return view.render('mahasiswa.rekap_nilai.rekap_nilai', data)
      }
}

module.exports = RekapNilaiController
