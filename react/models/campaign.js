var mongoose = require('mongoose')

var Campaign = mongoose.model('Campaign',{
    title: String,
    description: String
})

module.exports = Campaign
