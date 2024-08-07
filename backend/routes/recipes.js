const express = require("express");
const {
  getRecipes,
  addRecipe,
  saveRecipe,
  generateRecipes,
  deleteRecipe,
  checkSavedStatus,
} = require("../controllers/recipeController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Enable Authorization
router.use(requireAuth);

// GET recipes
router.get("/", getRecipes);

// POST recipe
router.post("/add", addRecipe);

// POST like for recipe
router.post("/save", saveRecipe);

// POST a check for status
router.post("/checkSaved", checkSavedStatus);

// POST generate new recipes
router.post("/generate", generateRecipes);

// DELETE recipe with id
router.delete("/:id", deleteRecipe);

module.exports = router;
