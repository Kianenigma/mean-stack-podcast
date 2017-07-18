const dgram = require('dgram')

const client = dgram.createSocket('udp4')
const message = Buffer.from('a udp message')

function _send() {
  client.send(message, 6000, 'localhost', (err, bytes) => {
    console.log(`[err ${err}] sent ${bytes} bytes`)
  })
}

client.bind(5000)
setInterval(_send, 2000)


