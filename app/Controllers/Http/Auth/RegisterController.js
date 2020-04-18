'use strict'

const Mahasiswa = use('App/Models/Mahasiswa')
const Promotor = use('App/Models/Promotor')

class RegisterController {

  async registerMhs({ request, response }) {
    const { first_name, last_name, nim, email, password } = request.only([
      'first_name',
      'last_name',
      'nim',
      'email',
      'password'
    ])

    const mahasiswa = await Mahasiswa.create({
      'first_name': first_name,
      'last_name': last_name,
      'nim': nim,
      'email': email,
      'password': password,
      'role': 1
    })

    return response.send({ message: 'Mahasiswa has been created' })
  }

  async registerPromotor({ request, response }) {
    const { first_name, last_name, nik, email, password } = request.only([
      'first_name',
      'last_name',
      'nik',
      'email',
      'password'
    ])

    const promotor = await Promotor.create({
      first_name,
      last_name,
      nik,
      email,
      password,
      'role': 2
    })

    return response.send({ message: 'Promotor has been created' })
  }
}

module.exports = RegisterController
