var passport = require('passport')
var Account = require('./models/account')
var Campaign = require('./models/campaign')

module.exports = function (app) {

  ////user acount routes////

  ////register user with encryption
  app.post('/register', function(req, res) {
    Account.register(new Account({
      username : req.body.username
    }), req.body.password, function(err, account) {
      if (err) {
          console.log(err)
          res.status(401)
          res.send()
      }

    passport.authenticate('local')(req, res, function () {
        res.send()
      })
    })
  })

  ////test user is logged in
  app.get('/amiloggedin',  function(req, res) {
    if(req.isAuthenticated()) {
      res.json(req.user)
    }else {
      res.status(401)
    }
  })

  ////login user
  app.post('/login', passport.authenticate('local'), function(req, res) {
    Account.find({
      username: req.body.username
    }, (err, account) => {
      res.json({account: account})
    })
  })

  ////logout user
  app.get('/logout', function(req, res) {
    req.logout()
    res.send()
  })

  /////////////////////// end of users routes//////////////////////


  //test server
  app.get('/ping', function(req, res){
    res.send("pong!", 200)
  })


  ////campaign routes////

  ////create new campaign
  app.post('/campaigns', function(req, res, next){

    var newCampaign = new Campaign({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description
    })
    newCampaign.save(function (err, post) {
      if (err) {
        return next(err)
      }
      res.json(201, post)
    })
  })

  ////get all campaigns
  app.get('/campaigns', function(req, res) {
    Campaign.find({}, function(err, users) {
      var campaignMap = {}

      users.forEach(function(campaign) {
        campaignMap[campaign._id] = campaign
      })

      res.send(campaignMap)
    })
  })
}
