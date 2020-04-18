'use strict'

const Penelitian = use('App/Models/RencanaPenelitian')
const Mahaiswa = use('App/Models/Mahasiswa')
const Database = use('Database')

class DashboardController {

  async index({request, auth, view}) {
    const user = auth.user
    const db = await Database.connect('mongodb')

    const data = {
      'user': user.toJSON()
    }
    if (user.penelitian) {
      const penelitian = await db.collection("rencana_penelitians")
        .findOne({_id: user.penelitian})
      penelitian['created_at'] = (new Date(penelitian['created_at'])).toLocaleDateString()
      data['penelitian'] = penelitian
    }
    return  view.render('mahasiswa.dashboard', data)
  }

  async formPenelitian({request, auth, view, response}) {
    const user = auth.user.toJSON()
    if (user.penelitian){
      return response.redirect('back')
    }
    return view.render('mahasiswa.form_penelitian', {
      'user': user
    })
  }

  async sendForm({request, response, auth}) {
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
    await mahasiswa.update({_id: auth.user._id},  { $set:
        {
          penelitian: penelitian._id,
        }
    })

    return response.route('mahasiswa.dashboard')

  }
}

module.exports = DashboardController
