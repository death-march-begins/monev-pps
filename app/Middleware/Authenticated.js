'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Authenticated {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    // call next to advance the request

    try {
      console.log(await auth.authenticator('promotor').check())
      return response.route('promotor.dashboard')
    } catch (error) {
      try {
        console.log(await auth.authenticator('mahasiswa').check())
        return response.route('mahasiswa.dashboard')
      } catch (e) {
        await next()
      }
    }
  }
}

module.exports = Authenticated
