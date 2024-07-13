const express = require('express');
const router = express.Router();
const { getDb } = require('../database.js');
const bodyParser = require("body-parser");
const fs = require("fs");


// POST route to generate ingredients from image
// Needs username, Image
// Returns Ingredients fro Image Query
router.post('/ingredients/generate', bodyParser.raw({type: ["image/jpeg", "image/png"], limit: "5mb"}), async (req, res) => {
    const db = getDb();
    //const { username, ingredients } = req.body;

    fs.writeFile("./temp/image.png", req.body, (error) => {
    if (error) {
        throw error;
    }
        console.log("Image saved.");
    });
    // const { username, image } = req.body;

    // if (!username || !image) {
    //     return res.status(400).send('username and Image are required');
    // }

    try {
    //     // API call to GPT4o sends image and recieves ingredient information
    //     // Post-processing can be performed on recieved image to extract ingredients and quantity
    //     let ingredients = await exampleFunction(xyz) // GPT CALL HERE

        // Processed ingredients are sent back to user for confirmation
        // Once confirmed by user, update endpoint should be hit
        res.status(200).send({ lol: 'lol'});
    } catch (error) {
        console.error('Error generating ingredients:', error);
        res.status(500).send('Error generating ingredients');
    }
});

// POST route to add new ingredients to DB or Update pre-existing
// Needs username, Ingredients in Map format <Ingredient, Quantity>
// Updates DB with ingredient list for user
router.post('/ingredients/update', async (req, res) => {
    const db = getDb();
    const { username, ingredients } = req.body;

    if (!username || !ingredients) {
        return res.status(400).send('username and Ingredients are required');
    }

    try {
        // Update the ingredients for the user
        await db.collection('users').updateOne(
            { username: username },
            { $set: {ingredients: ingredients}}
        );

        res.status(200).send('Ingredients updated');
    } catch (error) {
        console.error('Error updating ingredients:', error);
        res.status(500).send('Error updating ingredients');
    }
});


// GET route to return users current ingredients
// Needs username
// Returns ingredients for that user from DB
router.get('/ingredients', async (req, res) => {
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

        res.status(200).send(userIngredients);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).send('Error fetching ingredients');
    }
});




module.exports = router;