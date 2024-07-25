const mongoose = require('mongoose')

const Schema = mongoose.Schema

const IngredientSchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: mongoose.Schema.Types.Mixed, required: true },  // Using Mixed type to handle both Int32 and Double
    unit: { type: String, required: true }
});

module.exports = IngredientSchema