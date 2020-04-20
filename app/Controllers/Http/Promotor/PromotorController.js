'use strict'

class PromotorController {
  async dashboard({request, response, session, view, auth}) {
    const user = auth.user.toJSON()
    return  view.render('promotor.dashboard', {
      'user':user
    })
  }
}

module.exports = PromotorController
