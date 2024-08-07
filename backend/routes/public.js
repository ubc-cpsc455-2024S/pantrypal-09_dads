const express = require("express");
const { getRecipe } = require("../controllers/recipeController");

const router = express.Router();

//GET recipe with id
router.get("/:id", getRecipe);

module.exports = router;
