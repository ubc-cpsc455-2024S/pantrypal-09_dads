require("dotenv").config();
const User = require("../models/userModel");
const mongoose = require("mongoose");
const fs = require("fs");
const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_API_KEY });

const getIngredients = async (req, res) => {
  const user_uuid = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(user_uuid);

  if (!user) {
    return res.status(404).json({ error: "User not Found" });
  }

  res.status(200).json({ ingredients: user.ingredients });
};

const updateIngredients = async (req, res) => {
  const user_uuid = req.user._id;
  const { ingredients } = req.body;

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  const user = await User.findById(user_uuid);

  if (!user) {
    return res.status(404).json({ error: "User not Found" });
  }

  await User.findOneAndUpdate(
    { _id: user_uuid },
    { $set: { ingredients: ingredients } },
  );

  const user2 = await User.findById(user_uuid);

  res.status(200).json({ ingredients: user2.ingredients });
};

//Converts image to base64 string
function convertImageToBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        // Convert to base64
        const base64 = data.toString("base64");
        resolve(base64);
      }
    });
  });
}

const generateIngredients = async (req, res) => {
  const user_uuid = req.user._id;
  const file_info = req.files[0];

  if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
    return res.status(404).json({ error: "No such user" });
  }

  try {
    //Read base64 image received
    const base64Image = await convertImageToBase64(file_info.path);

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: {
        type: "json_object",
      },
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `This is an image of a fridge, cupboard, or pantry. Please list the ingredients you see. Include all relevant information that you can see and follow this JSON scheme EXACTLY:   
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
                                      name: "Oranges",
                                      quantity: 5,
                                      unit: "",
                                      notes: "Baby, Fresh"
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
                          `,
            },
            {
              type: "image_url",
              image_url: {
                url: "data:" + file_info.mimetype + ";base64," + base64Image,
              },
            },
          ],
        },
      ],
    });

    const user = await User.findById(user_uuid);
    const ingredients = JSON.parse(response.choices[0].message.content).items;

    if (!user) {
      return res.status(404).json({ error: "User not Found" });
    }

    await User.findOneAndUpdate(
      { _id: user_uuid },
      { $set: { ingredients: ingredients.concat(user.ingredients) } },
    );

    const user_updated = await User.findById(user_uuid);

    fs.unlink(req.files[0].path, (err) => {
      if (err) throw err;
      console.log("temp file was deleted");
    });

    console.log("Ingredients generated successfully");
    res.status(200).json({ ingredients: user_updated.ingredients });
  } catch (error) {
    console.error("Error generating ingredients:", error);
    res.status(500).send("Error generating ingredients");
  }
};

module.exports = {
  getIngredients,
  updateIngredients,
  generateIngredients,
};
