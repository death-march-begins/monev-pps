'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Database = use('Database')

class Seminar extends Model {
      async getSeminarHasil({id_user}){
            const db = await Database.connect('mongodb')
            const semhas = await db.collection("seminars").findOne({ _id_mahasiswa: id_user })
            return semhas
      }
}

module.exports = Seminar
