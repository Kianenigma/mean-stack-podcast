const homeCtrl = require('./controllers/homeCtrl')
const echoCtrl = require('./controllers/echoCtrl')
const timeCtrl = require('./controllers/timeCtrl')

const routes = {
  'GET': [
    {
      path: '/home', 
      controller: homeCtrl
    }
  ],
  'POST': [
    {
      path: '/time/unix',
      controller: timeCtrl
    }, 
    {
      path: '/echo',
      controller: echoCtrl
    }
  ]
}

module.exports = routes