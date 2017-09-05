const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose')

const Account = new Schema({
    username: String,
    password: String
})

Account.plugin(passportLocalMongoose)

module.export = mongoose.model('Account', Account)
