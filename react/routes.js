var passport = require('passport')
var Account = require('./models/account')
var Campaign = require('./models/campaign')

module.exports = function (app) {

  // app.get('/', function (req, res) {
  //     res.render('index', { user : req.user })
  // })

  // app.get('/register', function(req, res) {
  //     res.render('register', { })
  // })

  app.post('/register', function(req, res) {
    console.log(req.body.email);
    Account.register(new Account({
      username : req.body.username
    }), req.body.password, function(err, account) {
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
          res.status(200)
          res.json()
        }else {
          res.status(401)
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

  ////campaign routes////

  app.post('/campaigns', function(req, res){
    console.log(req.body.title)

    Campaign.campaigns(new Campaign({
      title: req.body.title,
      description: req.body.description
    }), function(err, campaign){
      if(err){
        console.log(err)
        res.status(401)
        res.send()
      } else {
        res.json({ result: "Campaign Added", title: req.body.title })
      }
    })//TODO: how to get this going?? get fontend to add this

    // var streetChange = new Campaign({
    //   title: "streetChange",
    //   description: "To help a little, a lot"
    // })//TODO: take out once input on insom end is made
    //
    // streetChange.save()

  })

}
