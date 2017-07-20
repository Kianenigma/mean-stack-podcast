const http = require('http')
const PORT = 3000

/**
 * Test
 * curl -X GET -i "http://localhost:3000"
 * curl -X GET -i "http://localhost:3000/foo/bar"
 * curl -X POST -i "http://localhost:3000"
 * curl -X POST -H "Content-Type: application/json" -d '{foo"": "foo"}'  -i "http://localhost:3000"
 */

const server = http.createServer((req, resp) => {
  console.log(`request received`)

  console.log(`req.method ${req.method}`)
  console.log(`req.url ${req.url}`)
  console.log(`req.rawHeaders ${req.rawHeaders}`)

  // req: Class: http.IncomingMessage
  // It implements the Readable Stream interface

  let data = [] 
  req.on('data', chunk => data.push(chunk) )
  req.on('end', () => {
    data = data.toString()
    console.log('request data', data)

    // resp => Class: http.ServerResponse
    // The response implements, but does not inherit from, the Writable Stream interface
    resp.write('foo\n')
    resp.write('bar\n')
    resp.end('finishing data')

  })

})

server.listen(PORT, '127.0.0.1')

server.on('listening', () => {
  console.log(`server listening on port ${server.address().port}`)
})

