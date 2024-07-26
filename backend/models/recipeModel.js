const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IngredientSchema = require('./ingredientModel');

const NutritionSchema = new Schema({
  calories: { type: Number, required: true },
  fat: { type: Number, required: true },
  carbs: { type: Number, required: true },
  protein: { type: Number, required: true },
  sugar: { type: Number, required: true },
  sodium: { type: Number, required: true }
});

const RecipeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  equipment: { type: [String], required: false },
  vegetarian: { type: Boolean, required: false },
  nutrition: { type: NutritionSchema, required: false },
  ingredients: { type: [IngredientSchema], required: true },
  steps: { type: [String], required: true },
  time: { type: Number, required: false },
  serves: { type: Number, required: false },
  image: { type: String, required: false },
  user_uuid: { type: String, required: false }
});

module.exports = mongoose.model('Recipe', RecipeSchema)