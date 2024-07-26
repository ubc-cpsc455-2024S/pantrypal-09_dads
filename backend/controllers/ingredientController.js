require('dotenv').config()
const OpenAI = require('openai');
const User = require('../models/userModel')
const mongoose = require('mongoose')

//OpenAI connection
const openai = new OpenAI({apiKey: process.env.OPEN_AI_API_KEY});

const getIngredients = async (req, res) => {
	const user_uuid = req.user._id
  
    if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
      return res.status(404).json({error: 'No such user'})
    }
  
    const user = await User.findById(user_uuid)
  
    if (!user) {
      return res.status(404).json({error: 'User not Found'})
    }
    
    res.status(200).json({ingredients: user.ingredients})
}
  


const updateIngredients = async (req, res) => {
	const user_uuid = req.user._id
    const {ingredients} = req.body

    if (!mongoose.Types.ObjectId.isValid(user_uuid)) {
      return res.status(404).json({error: 'No such user'})
    }
  
    const user = await User.findById(user_uuid)
  
    if (!user) {
      return res.status(404).json({error: 'User not Found'})
    }

    await User.findOneAndUpdate(
        {_id: user_uuid},
        { $set: {ingredients: ingredients}}
    )
    
    const user2 = await User.findById(user_uuid)

    res.status(200).json({ingredients: user2.ingredients})
}

module.exports = {
    getIngredients,
    updateIngredients
  }


