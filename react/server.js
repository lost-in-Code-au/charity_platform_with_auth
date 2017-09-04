var path = require('path')
var express = require('express')
var http = require('http')
var bodyParser = require('body-parser')
var expressSession = require('express-session')
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var app = express()

// app config
app.set('port', process.env.PORT || 3000)
app.use(bodyParser())

app.use(cookieParser('your secret here'))//secret, how does that work?
app.use(expressSession())//problematic?
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'client/build')))


// passport config
var Account = require('./models/account')
passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose')

// routes
require('./routes')(app)

app.listen(app.get('port'), function(){
  console.log(("Express server listening on port " + app.get('port')))
})
