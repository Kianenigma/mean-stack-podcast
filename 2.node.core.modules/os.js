const os = require('os')

console.log(`
  freemem: ${os.freemem()}
  totalmem: ${os.totalmem()}
  cpu: ${JSON.stringify(os.cpus(), null, 2)}
  userinfo: ${JSON.stringify(os.userInfo(), null, 2)}
  uptime: ${os.uptime}
  hostname: ${os.hostname}
`)