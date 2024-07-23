const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema =  new Schema({
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)