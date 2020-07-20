'use strict'

class UjianTertutupController {
      async index({ auth, view }){
            const user  = auth.user
            const data = {
                  'user' : user.toJSON()
            }
            return view.render('mahasiswa.ujian_tertutup.ujian_tertutup', data)
      }
}

module.exports = UjianTertutupController
