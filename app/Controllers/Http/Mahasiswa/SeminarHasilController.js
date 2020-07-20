'use strict'

const Seminar = use('App/Models/Seminar')

class SeminarHasilController {
      async index({ auth, view }){
            const user  = auth.user
            const isAvailable = await this.checkForm({ auth })
            console.log(isAvailable)
            const data = {
                  'user' : user.toJSON(),
                  'isAvailable' : isAvailable
            }
            return view.render('mahasiswa.seminar_hasil.seminar_hasil', data)
      }

      async checkForm({ auth }){
            const seminar_hasil = new Seminar()
            const id_user = auth.user._id
            const isFilled = await seminar_hasil.getSeminarHasil({id_user})
            if(isFilled){
                  return false
            }else{
                  return true
            }
      }

      async sendForm({ auth, request, response }){
            const { tgl_seminar, wkt_seminar, penguji_1, penguji_2, penguji_3 } = request.only([
                'tgl_seminar',
                'wkt_seminar',
                'penguji_1',
                'penguji_2',
                'penguji_3',
            ])
    
            const seminar = await Seminar.create({
                '_id_mahasiswa': auth.user._id,
                'tgl_seminar': tgl_seminar,
                'wkt_seminar': wkt_seminar,
                'penguji_1': penguji_1,
                'penguji_2': penguji_2,
                'penguji_3': penguji_3,
                'kategori' : 2
            })

            return response.route('mahasiswa.seminar-hasil')
      }

}

module.exports = SeminarHasilController
