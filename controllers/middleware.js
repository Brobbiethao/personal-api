var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },
  generateID: function(req, res, next) {
    var id = skillz.length + 1;
    req.query.id = id;
    next();
  },
  verifyUser: function(req, res, next) {
    var username = req.params.username;
    var pin = req.params.pin;
    if (username === "who" && pin === "100") {
      next();
    } else {
      res.sendStatus(403);
    }
  }

}
