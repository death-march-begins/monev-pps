'use strict'

const Penelitian = use('App/Models/Penelitian')
const Mahasiswa = use('App/Models/Mahasiswa')
const Database = use('Database')

class PromotorController {
  async dashboard({view, auth}) {
    const user = auth.user.toJSON()
    const db = await Database.connect('mongodb')

    const bimbingan = await db.collection("penelitians").find({promotor: user.first_name+" "+user.last_name}).toArray()
    for(const item of bimbingan){
      const mhs = await db.collection("mahasiswas").findOne({ penelitian: item._id })
      item['updated_at'] = (new Date(item['updated_at'])).toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " "); 
      item.nama = mhs.first_name + " " + mhs.last_name;
      item.nim = mhs.nim;
    }
    console.log(bimbingan)
    return  view.render('promotor.dashboard', {
      'user':user,
      'bimbingan':bimbingan
    })
  }

  async getLamanMhs({view, auth, params}){
    const user = auth.user.toJSON()
    const db = await Database.connect('mongodb')
    const mhs = await db.collection("mahasiswas").findOne({nim: params.id})

    const data={
      'user':user,
      'mahasiswa':mhs
    }

    if (mhs.penelitian) {
      const penelitian = await db.collection("penelitians")
          .findOne({ _id: mhs.penelitian })
      penelitian['created_at'] = (new Date(penelitian['created_at'])).toLocaleDateString()
      data['penelitian']=penelitian
    }
    
    return view.render('promotor.laman_mhs',data)
  }
}

module.exports = PromotorController
