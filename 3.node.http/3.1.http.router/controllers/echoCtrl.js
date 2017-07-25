const echoCtrl = function(req, resp, body) {
  // This will NOT work
  // req.pipe(resp)
  
  resp.end(body)
}

module.exports = echoCtrl