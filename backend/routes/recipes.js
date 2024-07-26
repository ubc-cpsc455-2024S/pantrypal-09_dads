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

// require auth for all recipe routes
router.use(requireAuth)

// GET all recipes
router.get('/', getRecipes)

//GET a single recipe
router.get('/:id', getRecipe)

// POST a new recipe 
router.post('/add', createRecipe)

// POST new recipes 
router.post('/addMultiple', createRecipes)

// POST generate new recipes
router.post('/generate', generateRecipes)

// DELETE a recipe
router.delete('/:id', deleteRecipe)

module.exports = router