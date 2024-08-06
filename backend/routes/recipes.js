const express = require('express')
const {
getRecipes,
getRecipe,
addRecipe,
saveRecipe,
generateRecipes,
deleteRecipe,
checkSavedStatus
} = require('../controllers/recipeController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all recipe routes
router.use(requireAuth)

// GET all recipes
router.get('/', getRecipes)

//GET a single recipe
router.get('/:id', getRecipe)

// POST a new recipe 
router.post('/add', addRecipe)

// POST a like for a recipe 
router.post('/save', saveRecipe)

// POST a check for status
router.post('/checkSaved', checkSavedStatus)

// POST generate new recipes
router.post('/generate', generateRecipes)

// DELETE a recipe
router.delete('/:id', deleteRecipe)

module.exports = router