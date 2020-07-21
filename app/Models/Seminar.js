'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Seminar extends Model {
      async getSeminarHasil({id_user}){
            const db = await Database.connect('mongodb')
            const semhas = await db.collection("seminars").find({ _id_mahasiswa: id_user }).sort({_id:-1}).limit(1).toArray()
            return semhas
      }
}

module.exports = Seminar
