const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userScheme = new Schema({
}, { timestamps: true })

module.exports = mongoose.model('User', userScheme)
