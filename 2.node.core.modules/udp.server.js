const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('listening', () => {
  console.log(`server listening on ${server.address().port}`)
})

server.on('message', (msg, info) => {
  console.log(`messages received from ${JSON.stringify(info)} = ${msg}`)
})

server.on('error', (err) => {
  console.log(`server error ${err}`)
})

server.bind(6000)




