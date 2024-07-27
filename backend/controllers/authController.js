const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// process login for user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}


// process signup for user
const signupUser = async (req, res) => {
  const {email, password} = req.body

  // disable signup for workshop demo
  res.status(500).json({error: "Signup Disabled for Workshop Demo to prevent spam lol"})

  try {
    const user = await User.signup(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }

