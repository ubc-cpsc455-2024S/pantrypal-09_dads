const express = require('express')
const {
  getIngredients,
  generateIngredients,
  updateIngredients,
  addIngredients,
  deleteIngredients
} = require('../controllers/userController')

const router = express.Router()

// GET all ingredients
router.get('/', getIngredients)

// POST a new image for gredient list
router.post('/', generateIngredients)

// UPDATE an ingredients list
router.patch('/:id', updateIngredients)

// POST a new ingredient
router.post('/', addIngredients)

// DELETE an ingredient
router.delete('/:id', deleteIngredients)


module.exports = router