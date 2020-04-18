'use strict'

class AuthenticatedController {
  async logout({auth, response}) {
    await auth.logout()
    return response.route('login.show')
  }

}

module.exports = AuthenticatedController
