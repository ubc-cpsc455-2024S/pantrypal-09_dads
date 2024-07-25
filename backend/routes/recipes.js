const express = require('express')
const {
getRecipes,
getRecipe,
createRecipe,
createRecipes,
generateRecipes,
deleteRecipe
} = require('../controllers/recipeController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

// GET all workouts
router.get('/', getRecipes)

//GET a single workout
router.get('/:id', getRecipe)

// POST a new recipe 
router.post('/', createRecipe)

// POST a new recipe 
router.post('/', createRecipes)

// POST a new workout
router.post('/', createRecipe)

// POST generate new recipes
router.post('/', generateRecipes)

// DELETE a workout
router.delete('/:id', deleteRecipe)

module.exports = router