const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeScheme =  new Schema({
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeScheme)