'use strict'

class HomeController {
    async index({response, auth}) {
      return response.route('login.show')
    }
}

module.exports = HomeController