const express = require('express');
const router = express.Router();
const { getDb } = require('../database.js');
const mongoose = require('mongoose');

// POST route to generate recipes from ingredients
// Needs username, ingredients should already be in userDB
router.post('/recipes/generate', async (req, res) => {
	const db = getDb();
	const { username } = req.body;

	if (!username) {
			return res.status(400).send('username is required');
	}

	try {
			// Fetch user's ingredients from the database
			const user = await db.collection('users').findOne({ username: username });
			let userIngredients = user['ingredients']

			if (!userIngredients) {
					return res.status(404).send('No ingredients found for this user');
			}

			// Should have GPT4o call to generate recipe from user ingredients
			// Might need a helper to convert from [<ingredients, quantity>] to string
			const recipe = "123" // GPT CALL HERE
			const recipeIngredients = {} //[<ingredients, quantity>]

			// Save the generated recipes to the database 
			let recipeObject = await db.collection('recipes').insertOne({
					recipe: recipe,
					ingredients: recipeIngredients, // Not the same as userIngredients, since some might be unused
					ratings: {},
					likes: 0
			});

			let recipeID = recipeObject['insertedId'].toString()
			
			res.status(200).send({ recipeID : recipeID });
	} catch (error) {
			console.error('Error generating recipes:', error);
			res.status(500).send('Error generating recipes');
	}
});

// POST route to like a recipe
// Needs Username, RecipeID, increments recipe liked value
router.post('/recipes/like/:recipeID', async (req, res) => {
	const { recipeID } = req.params;
	const { username } = req.body; // Assuming username is coming in the request body

	console.log(recipeID)

	if (!username || !recipeID) {
			return res.status(400).send('username and RecipeID are required');
	}
	
	var ObjectId = require('mongodb').ObjectId;   

	if (!ObjectId.isValid("669117e52569f4740ef33523")) {
			return res.status(400).send('Invalid RecipeID format');
	}

	const recipeOID = new ObjectId(recipeID);

	try {
			const db = getDb();

			// Increment the like count for the specified recipe
			const result = await db.collection('recipes').findOne({ "_id": recipeOID });

			if (!result) {
					return res.status(404).send('Recipe not found');
			}

			// Assuming you have a field 'likes' in the recipe document to increment
			await db.collection('recipes').updateOne(
					{ "_id": recipeOID },
					{ $inc: { likes: 1 } }
			);

			res.status(200).send('Like added to the recipe');
	} catch (error) {
			console.error('Error processing request:', error);
			res.status(500).send('Error processing request');
	}
});

module.exports = router;