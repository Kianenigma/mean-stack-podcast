const http = require('http')
const fs = require('fs')
const PORT = 3000

const server = http.createServer((req, resp) => {
  if ( req.method === 'GET' && req.url === '/' ) {
    // Using data
    // fs.readFile('./index.html', (err, file) => {
    //   if ( err ) { 
    //     throw err 
    //   }

    //   // 2XX => OK
    //   // 4XX => Error (handle)
    //   // 5XX => Internal Server Error
    //   resp.writeHead(200, {'Content-Type': 'text/html'})  
    //   resp.end(file)

    // })


    // Using pipe
    let fileStream = fs.createReadStream('./index.html')
    fileStream.pipe(resp)
  }
})

server.listen(PORT, '127.0.0.1')

server.on('listening', () => {
  console.log(`server listening on port ${server.address().port}`)
})

