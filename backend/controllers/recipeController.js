const Recipe = require('../models/recipeModel')
const User = require('../models/userModel')

const mongoose = require('mongoose')

const OpenAI = require('openai');
require('dotenv').config()

const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY});

// get all workouts
const getRecipes = async (req, res) => {
  const user_uuid = req.user._id

  const recipes = await Recipe.find({user_uuid}).sort({createdAt: -1})

  res.status(200).json(recipes)
}

// get a single workout
const getRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such recipe'})
  }

  const recipe = await Recipe.findById(id)

  if (!recipe) {
    return res.status(404).json({error: 'No such recipe'})
  }
  
  res.status(200).json(recipe)
}


// create new workout
const createRecipe = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if(!title) {
    emptyFields.push('title')
  }
  if(!load) {
    emptyFields.push('load')
  }
  if(!reps) {
    emptyFields.push('reps')
  }
  if(emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
  }

  // add doc to db
  try {
    const user_id = req.user._id
    const workout = await Workout.create({title, load, reps, user_id})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// create new recipes
const createRecipes = async (req, res) => {
    const {title, load, reps} = req.body
  
    let emptyFields = []
  
    if(!title) {
      emptyFields.push('title')
    }
    if(!load) {
      emptyFields.push('load')
    }
    if(!reps) {
      emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
  
    // add doc to db
    try {
      const user_id = req.user._id
      const workout = await Workout.create({title, load, reps, user_id})
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  

// create new workout
const generateRecipes = async (req, res) => {
    const user_uuid = req.user._id
  
    try {
		// Fetch user's ingredients from the database
		const user = await User.findOne({ _id: user_uuid });
		
		let userIngredients = user['ingredients'];
				
		if (!userIngredients) {
			return res.status(404).send('No ingredients found for this user');
		}

        //Create plain english concatenation of ingredients
		var ingredientString = "Ingredients: "

		userIngredients.map((ingredient) => {
			ingredientString += ingredient.quantity + " " + ingredient.unit + " of " + ingredient.name + " (Notes: " + ingredient.notes + "), "
		});

		// Should have GPT4o call to generate recipe from user ingredients
		// Might need a helper to convert from [<ingredients, quantity>] to string
        console.log("Generating Recipes for User " + user_uuid)

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
		console.log("Finished Generating Recipes for User " + user_uuid)

        //TODO: If we find a cheaper alternative to image gen, uncomment this and add it in
		let retVal = []
		for(let i = 0; i < recipes.recipes.length; i++) {
			curr = recipes.recipes[i]

			// console.log("Generating tag and image for Recipe "+  i);
			// const response = await openai.images.generate({
			// 	model: "dall-e-3",
			// 	prompt: curr.name,
			// 	n: 1,
			// 	size: "1024x1024",
			// });
			curr['user_uuid'] = user_uuid

			await Recipe.create(curr)
			retVal.push(curr);
		}


		res.status(200).send({recipes: retVal});
	} catch (error) {
		console.error('Error generating recipes:', error);
		res.status(500).send('Error generating recipes');
	}
  }

// delete a workout
const deleteRecipe = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such recipe'})
  }

  const recipe = await Recipe.findOneAndDelete({_id: id})

  if (!recipe) {
    return res.status(400).json({error: 'No such recipe'})
  }

  res.status(200).json(recipe)
}


module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  createRecipes,
  generateRecipes,
  deleteRecipe
}