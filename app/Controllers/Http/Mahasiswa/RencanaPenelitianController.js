'use strict'
const Database = use('Database')
const Penelitian = use('App/Models/Penelitian')
const Mahasiswa = use('App/Models/Mahasiswa')

class RencanaPenelitianController {

    async index({ request, auth, view, response }) {
        const user = auth.user
        const db = await Database.connect('mongodb')

        const data = {
            'user': user.toJSON()
        }

        if (user.penelitian) {
            const penelitian = await db.collection("penelitians")
                .findOne({ _id: user.penelitian })

            data['penelitian'] = penelitian
            return view.render('mahasiswa.rencana-penelitian.rincian_penelitian', data)
        }

        return view.render('mahasiswa.rencana-penelitian.form_rencana', data)
        
    }


    async sendFormRencana({ request, response, auth }) {
        const db = await Database.connect('mongodb')
        const content = request.only([
            'judul',
            'minat',
            'promotor',
            'ko_promotor1',
            'ko_promotor2',
            'waktu_mulai',
            'waktu_berakhir',
            'biaya',
            'tempat',
            'abstrak',
            'kontribusi',
            'tkt',
            'jib'
        ])

        const penelitian = await Penelitian.create(content)

        const mahasiswa = await db.collection("mahasiswas")
        await mahasiswa.update({ _id: auth.user._id }, {
            $set: {
                penelitian: penelitian._id,
            }
        })

        return response.route('mahasiswa.rencana-penelitian')

    }

}

module.exports = RencanaPenelitianController
