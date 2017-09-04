const passport = require('passport')
const Account = require('./models/account')

module.exports = function (app) {

  app.post('/register', function(req, res) {
    console.log(req.body.email)
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        console.log("--- you have NOT registered, something was typed wrong ---")
        console.log(err)
        res.sendStatus(401)
      }

      passport.authenticate('local')(req, res, function () {
        console.log("--- you HAVE registered ---")
        res.json({email: req.user.username, id: req.user._id})
      })
    })
  })

  app.get('/amiloggedin',  function(req, res) {
    console.log(req.body.username)
    if(req.isAuthenticated()) {
      console.log("--- you ARE still logged in of backEnd ---")
      res.json({email: req.user.username, id: req.user._id})
    }else {
      console.log("--- you are NOT still logged in of backEnd ---")
      res.sendStatus(401)
    }
  })

  app.post('/signin', passport.authenticate('local'), function(req, res) {
    console.log("--- you HAVE logged into backEnd ---")
    res.json({email: req.user.username, id: req.user._id})
  })

  app.get('/signout', function(req, res) {
    console.log("--- you HAVE logged out of backEnd ---")
    req.logout()
    res.send()
  })

  app.get('/ping', function(req, res){
    res.sendStatus("--- pong! server running fine :) ---", 200)
  })

  ///////////////////////api for memberCampaigns below//////////

  app.get('/api/member_campaigns', function(req, res){
    // res.json({title: req.body._id, image: req.body.image, description: req.body.description})

    console.log(res.responseText)
    // if(req.isAuthenticated()) {
    //   console.log("--- you ARE logged in ---")
    //
    //   res.json({email: req.user.username, id: req.user._id})
    // }else {
    //   console.log("--- you are NOT logged in ---")
    //   res.sendStatus(401)
    // }
  })

}
