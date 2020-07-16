'use strict'

class SeminarHasilController {
      async index({ auth, view }){
            const user  = auth.user
            const data = {
                  'user' : user.toJSON()
            }
            return view.render('mahasiswa.seminar_hasil', data)
      }
}

module.exports = SeminarHasilController
