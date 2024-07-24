require('dotenv').config()
const express = require('express');
const router = express.Router();
const { getDb } = require('../database.js');
const fs = require("fs");
const multer = require('multer');
const OpenAI = require('openai');
const { v4: uuidv4 } = require('uuid');
//HELPERS

// Returns Ingredients fro Image Query
//Image Uploader
const imageUploadPath = './temp';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `temp.png`)
        //cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})

//OpenAI connection
const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY});

//Converts image to base64 string
function convertImageToBase64(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
        if (err) {
            reject(err);
        } else {
            // Convert to base64
            const base64 = data.toString('base64');
            resolve(base64);
        }
        });
    });
}

// POST route to generate ingredients from image
// Needs username, Image
router.post('/ingredients/generate', imageUpload.array("my-image-file"), async (req, res) => {
    console.log('POST request received to /ingredients/generate');

    const db = getDb();
    const { username } = req.body;

    try {
        //Read base64 image received
        //TODO: Instead of path, read base64 string straight from req.body
        const base64Image = await convertImageToBase64("./temp/temp.png");

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
                            `This is an image of a fridge, cupboard, or pantry. Please list the ingredients you see. Include all relevant information that you can see and follow this JSON scheme EXACTLY:   
                                items: [
                                    {
                                        name: "Flour",
                                        quantity: 2,
                                        unit: "cups",
                                        notes: "All-purpose flour"
                                    },
                                    {
                                        name: "Sugar",
                                        quantity: 1,
                                        unit: "cup",
                                        notes: "Granulated white sugar"
                                    },
                                    {
                                        name: "Butter",
                                        quantity: 0.5,
                                        unit: "cup",
                                        notes: "Unsalted, melted"
                                    },
                                    {
                                        name: "Eggs",
                                        quantity: 2,
                                        unit: "pieces",
                                        notes: "Large"
                                    }
                                ]
                            `
                        },
                        {
                            type: "image_url",
                            image_url: {
                                "url": "data:image/jpeg;base64,"+base64Image,
                            },
                        },
                    ],
                },
            ],
        });

        const existingUser = await db.collection('users').findOne({ username });

        if (!existingUser) {
            console.log('Username does not exist');
            return res.status(409).send("Username doesn't exists");
        }

        const ingredients = JSON.parse(response.choices[0].message.content);
        for(let i = 0; i < ingredients.items.length; i++) {
            ingredients.items[i].uuid = uuidv4();
        }

        await db.collection('users').updateOne(
            { username: username },
            { $set: {ingredients: ingredients}}
        );

        // Processed ingredients are sent back to user for confirmation
        // Once confirmed by user, update endpoint should be hit
        console.log("Ingredients generated successfully")
        res.status(200).send({ ingredients: ingredients});
    } catch (error) {
        console.error('Error generating ingredients:', error);
        res.status(500).send('Error generating ingredients');
    }
});

// POST route to add new ingredients to DB or Update pre-existing
// Needs username, Ingredients in Map format <Ingredient, Quantity>
// Updates DB with ingredient list for user
router.post('/ingredients/update', async (req, res) => {
    console.log('POST request received to /ingredients/update');

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
            
        res.status(200).send({ ingredients: ingredients});
    } catch (error) {
        console.error('Error updating ingredients:', error);
        res.status(500).send('Error updating ingredients');
    }
});


// GET route to return users current ingredients
// Needs username
// Returns ingredients for that user from DB
router.get('/ingredients', async (req, res) => {
    console.log('GET request received to /ingredients');

    const db = getDb();
    const { username } = req.query;

    if (!username) {
        return res.status(400).send('username is required');
    }

    try {
        const user = await db.collection('users').findOne({ username: username });

        if (!user) {
            return res.status(404).send('No ingredients found for this user');
        }

        res.status(200).send(user.ingredients);
    } catch (error) {
        console.error('Error fetching ingredients:', error);
        res.status(500).send('Error fetching ingredients');
    }
});




module.exports = router;