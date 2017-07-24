const http = require('http')
const PORT = 3000

const server = http.createServer((req, resp) => {

  if ( req.method === 'POST' && req.url === '/time/unix') {
    let data = [] 
    req.on('data', chunk => data.push(chunk) )
    req.on('end', () => {
      data = data.toString()
      data = JSON.parse(data)
      console.log('request data', data)

      let parsedDate = new Date(Number(data.time))

      resp.end(JSON.stringify({
        parsedDate: parsedDate
      }))
    })  
  }
  else {
    resp.writeHead(404)
    resp.end(http.STATUS_CODES[404])
  }

})

server.listen(PORT, '127.0.0.1')

server.on('listening', () => {
  console.log(`server listening on port ${server.address().port}`)
})

