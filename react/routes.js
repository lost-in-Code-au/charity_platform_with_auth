var passport = require('passport')
var Account = require('./models/account')

module.exports = function (app) {

  // app.get('/', function (req, res) {
  //     res.render('index', { user : req.user })
  // })

  // app.get('/register', function(req, res) {
  //     res.render('register', { })
  // })

  app.post('/register', function(req, res) {
    console.log(req.body.email);
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            //return res.render('register', { account : account })
            console.log(err);
            res.status(401);
            res.send();
        }

        passport.authenticate('local')(req, res, function () {
          res.send();
          // res.redirect('/')
        })
    })
  })

  app.get('/amiloggedin',  function(req, res) {
        if(req.isAuthenticated()) {
          res.status(200);
        }else {
          res.status(401);
        }
        res.send();
  })

  app.post('/login', passport.authenticate('local'), function(req, res) {
      res.send(200);
      res.send();
  })

  app.get('/logout', function(req, res) {
      req.logout()
      res.send();
  })

  app.get('/ping', function(req, res){
      res.send("pong!", 200)
  })

}
