var mongoose = require('mongoose')

var Campaign = mongoose.model('Campaign',{
    title: String,
    image: String,
    description: String
})

module.exports = Campaign
