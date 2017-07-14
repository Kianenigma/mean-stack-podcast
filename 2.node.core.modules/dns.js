const dns = require('dns')

const opts = {}
dns.lookup('faranesh.com', opts, (err, address, family) => {
  console.log(err, address, family)
})

opts.all = true 
dns.lookup('faranesh.com', opts, (err, address, family) => {
  console.log(err, address)
})

dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log(err, hostname, service)
})

dns.resolveNs('varzesh3.ir', (err, addresses) => {
  console.log(err, addresses)
})