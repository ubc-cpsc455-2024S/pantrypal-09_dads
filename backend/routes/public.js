const express = require("express");

// controller functions
const { getRecipe } = require("../controllers/recipeController");

const router = express.Router();

//GET a single recipe
router.get("/:id", getRecipe);

module.exports = router;
