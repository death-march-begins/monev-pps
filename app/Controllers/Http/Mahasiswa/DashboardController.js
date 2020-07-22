'use strict'

const Penelitian = use('App/Models/Penelitian')
const Mahasiswa = use('App/Models/Mahasiswa')
const Database = use('Database')

class DashboardController {

    async index({ request, auth, view }) {
        const user = auth.user
        const db = await Database.connect('mongodb')

        const data = {
            'user': user.toJSON()
        }
        
        if (user.penelitian) {
            const penelitian = await db.collection("penelitians")
                .findOne({ _id: user.penelitian })
            penelitian['created_at'] = (new Date(penelitian['created_at'])).toLocaleDateString()
            data['penelitian'] = penelitian
        }
        return view.render('mahasiswa.dashboard', data)
    }

}

module.exports = DashboardController