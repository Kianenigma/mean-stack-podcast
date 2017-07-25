/**
 * An example of using moudles in http
 * 
 * 1) The server file should only contain the bare minimum
 * 2) Each route should be defined in a separate controller file
 * 3) a `routes.js` file should describe all routes and their controller function
 * 4) Generic functions should be used for logging and errorHandling
 */

const http = require('http')
const PORT = 3000
const routes = require('./routes')
const logger = require('./common').logger
const closeError = require('./common').closeError

const server = http.createServer((req, resp) => {  
  logger(req, resp)

  if ( routes[req.method] ) {
    let index = routes[req.method].map((o) => o.path).indexOf(req.url)

    if ( index > -1 ) {
      let controller = routes[req.method][index].controller
      let body = []

      req.on('data', chunk => body.push(chunk))
      req.on('end', () => {
        controller(req, resp, body.toString())
      })
    } 
    else {
      closeError(req, resp, 404, 'URL not found')
    }
  }
  else {
    closeError(req, resp, 404, 'METHOD invalid')
  }

})

server.listen(PORT, '127.0.0.1')

server.on('listening', () => {
  console.log(`server listening on port ${server.address().port}`)
})

