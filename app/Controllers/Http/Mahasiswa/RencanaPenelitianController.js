'use strict'

class RencanaPenelitianController {

    async formRencanaIndex({ request, auth, view, response }) {
        const user = auth.user.toJSON()
        if (user.penelitian) {
            return response.redirect('back')
        }
        return view.render('mahasiswa.rencana-penelitian.form_rencana', {
            'user': user
        })
        
    }


    async sendFormRencana({ request, response, auth }) {
        const db = await Database.connect('mongodb')
        const { judul, minat, promotor, ko_promotor1, ko_promotor2 } = request.only([
            'judul',
            'minat',
            'promotor',
            'ko_promotor1',
            'ko_promotor2',
        ])

        const penelitian = await Penelitian.create({
            'judul': judul,
            'minat': minat,
            'promotor': promotor,
            'ko_promotor1': ko_promotor1,
            'ko_promotor2': ko_promotor2,
        })

        const mahasiswa = await db.collection("mahasiswas")
        await mahasiswa.update({ _id: auth.user._id }, {
            $set: {
                penelitian: penelitian._id,
            }
        })

        return response.route('mahasiswa.dashboard')

    }

}

module.exports = RencanaPenelitianController
