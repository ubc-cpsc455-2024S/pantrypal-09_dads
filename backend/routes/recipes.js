const express = require('express');
const { getDb } = require('../database.js');
const router = express.Router();
const OpenAI = require('openai');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()


//OpenAI Connection 
const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY});
let temp = []

// POST route to generate recipes from ingredients
// Needs username, ingredients should already be in userDB
// Saved generated Recipe to DB and returns recipeID
router.post('/recipes/generate', async (req, res) => {
	const db = getDb();
	const { username } = req.body;
	
	console.log("request received to generate recipes")

	if (!username) {
		return res.status(400).send('username is required');
	}

	try {
		// Fetch user's ingredients from the database
		const user = await db.collection('users').findOne({ username: username });
		
		let userIngredients = user['ingredients'].items;
				
		if (!userIngredients) {
			return res.status(404).send('No ingredients found for this user');
		}


		var ingredientString = "Ingredients: "

		userIngredients.map((ingredient) => {
			ingredientString += ingredient.quantity + " " + ingredient.unit + " of " + ingredient.name + " (Notes: " + ingredient.notes + "), "
		});

		// Should have GPT4o call to generate recipe from user ingredients
		// Might need a helper to convert from [<ingredients, quantity>] to string
		const response = await openai.chat.completions.create({
			model: "gpt-4o",
			response_format: {
				"type": "json_object"
			},
			messages: [
				{
					role: "user",
					content: [
						{ type: "text", text: 
							`Here is a list of ingredients that I have available at home. Can you create 3-6 recipes using these ingredients. Each recipe should be detailed with name, description, steps, tools, and more. you MUST follow this JSON scheme EXACTLY:   
								{
									recipes: [
										{
											name: "Spaghetti Carbonara",
											description: "A classic Italian dish made with spaghetti, eggs, bacon, and cheese.",
											equipment: ["ice cream scoop", "kitchen thermometer", "muffin tray", "microwave", "oven", "bowl"],
											vegetarian: false,
											nutrition: {"calories": 500, "fat": 20, "carbs": 60, "protein": 30, "sugar": 10, "sodium": 500},
											ingredients: [{ name: "Spaghetti", quantity: 1, unit: "cup" }, { name: "Eggs", quantity: 2, unit: "pieces" }, { name: "Bacon", quantity: 4, unit: "strips" }, { name: "Parmesan Cheese", quantity: 0.5, unit: "cup" }, { name: "Black Pepper", quantity: 1, unit: "teaspoon"} ],
											steps:  [
											"Mix together ingredients for meatballs in a bowl.Preheat oven to 350F.Grease an 8 hole muffin tin.Use an ice cream scoop to divide out meatball mix and drop into muffin pan.",
											"Bake meatballs, for 35 minutes or until inside reaches 160F on an instant read thermometer.",
											"Drain meatballs on a cookie rack.",
											"Heat marinara sauce and cook spaghetti and rice noodles (separately) according to package directions.",
											"Drain pasta, keep spaghetti warm and cool rice noodles in cold water then drain.Slice meatballs in half horizontally to make two pieces, each with a flat surface.Pat rice noodles dry with paper toweling and layer over the top of the meatball, tucking sliced olives in for eyes.It is best to let the meatballs sit still for about 15 minutes so they become more tacky and hold together better.But since they will get cold, microwave them on a microwave-safe plate for a minute, then carefully place a mummy meatball onto a nest of sauced spaghetti and serve."
											],
											time: 30,
											serves: 5
										},
										{
											name: "Spaghetti Carbonara",
											description: "A classic Italian dish made with spaghetti, eggs, bacon, and cheese.",
											equipment: ["ice cream scoop", "kitchen thermometer", "muffin tray", "microwave", "oven", "bowl"],
											vegetarian: false,
											nutrition: {"calories": 500, "fat": 20, "carbs": 60, "protein": 30, "sugar": 10, "sodium": 500},
											ingredients: [{ name: "Spaghetti", quantity: 1, unit: "cup" }, { name: "Eggs", quantity: 2, unit: "pieces" }, { name: "Bacon", quantity: 4, unit: "strips" }, { name: "Parmesan Cheese", quantity: 0.5, unit: "cup" }, { name: "Black Pepper", quantity: 1, unit: "teaspoon"} ],
											steps:  [
											"Mix together ingredients for meatballs in a bowl.Preheat oven to 350F.Grease an 8 hole muffin tin.Use an ice cream scoop to divide out meatball mix and drop into muffin pan.",
											"Bake meatballs, for 35 minutes or until inside reaches 160F on an instant read thermometer.",
											"Drain meatballs on a cookie rack.",
											"Heat marinara sauce and cook spaghetti and rice noodles (separately) according to package directions.",
											"Drain pasta, keep spaghetti warm and cool rice noodles in cold water then drain.Slice meatballs in half horizontally to make two pieces, each with a flat surface.Pat rice noodles dry with paper toweling and layer over the top of the meatball, tucking sliced olives in for eyes.It is best to let the meatballs sit still for about 15 minutes so they become more tacky and hold together better.But since they will get cold, microwave them on a microwave-safe plate for a minute, then carefully place a mummy meatball onto a nest of sauced spaghetti and serve."
											],
											time: 30,
											serves: 5
										}
									]
								}
							`
						},
						{
							type: "text",
							text: ingredientString,
						},
					],
				},
			],
		});

		const recipes = JSON.parse(response.choices[0].message.content);
		console.log("Finished Generating Recipes")

		let retVal = []
		for(let i = 0; i < recipes.recipes.length; i++) {
			curr = recipes.recipes[i]

			console.log("Generating tag and image for Recipe "+  i);
			const response = await openai.images.generate({
				model: "dall-e-3",
				prompt: curr.name,
				n: 1,
				size: "1024x1024",
			});
			curr['image'] = response.data[0].url;
			curr['uuid'] = uuidv4()

			let recipeObject = await db.collection('recipes').insertOne(curr);
			retVal.push(curr);
		}

		temp = retVal;

		res.status(200).send({ recipes : retVal });
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

	if (!ObjectId.isValid(recipeID)) {
			return res.status(400).send('Invalid RecipeID format');
	}

	const recipeOID = new ObjectId(recipeID);

	try {
			const db = getDb();

			// Increment the like count for the specified recipe
			const result = await db.collection('recipes').updateOne({ "_id": recipeOID });

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

// GET route to return users current ingredients
// Needs username
// Returns ingredients for that user from DB
router.get('/recipes', async (req, res) => {
    const db = getDb();
    const { username } = req.query;
	
    if (!username) {
        return res.status(400).send('username is required');
    }

    try {
        const userIngredients = await db.collection('users').findOne({ username: username });

        if (!userIngredients) {
            return res.status(404).send('No ingredients found for this user');
        }

        res.status(200).send({ recipes : temp });
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).send('Error fetching ingredients');
    }
});


module.exports = router;