const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
