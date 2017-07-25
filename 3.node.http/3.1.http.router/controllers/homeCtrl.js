const fs = require('fs')

const homeCtrl = function(req, resp, body) {
  const rs = fs.createReadStream('./templates/index.html')
  rs.pipe(resp)
}

module.exports = homeCtrl