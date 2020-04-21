'use strict'

class DashboardController {
    async index({request, response, auth, view}){
        const user = auth.user.toJSON()
        return  view.render('promotor.dashboard', {
          'user':user
        })
    }
}

module.exports = DashboardController
