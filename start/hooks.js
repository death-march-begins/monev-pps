'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const View = use('View')
  const Env = use('Env')
  const Exception = use('Exception')

  View.global('appUrl', path => {
    const APP_URL = Env.get('APP_URL')

    return path ? `${APP_URL}/${path}` : APP_URL
  })

  // handle `InvalidSessionException`
  Exception.handle('InvalidSessionException', async (error, { response }) => {
    return response.route('login.show')
  })

  Exception.handle('HttpException', async (error, { response, view }) => {
    return response.send(view.render('error.error_404'))
  })

})
