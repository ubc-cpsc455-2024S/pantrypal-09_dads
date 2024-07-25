const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bcrypt = require('bcrypt')
const validator = require('validator')

const IngredientSchema = require('./ingredientModel');

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true},
  dietary_preferences: {type: String, required: false},
  ingredients: { type: [IngredientSchema], required: true },
})




//SignUp validator
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid')
    }
    
    //TODO: Re-enable password validation for PROD
    // if (!validator.isStrongPassword(password)) {
    //     throw Error('Password not strong enough')
    // }
  
    const exists = await this.findOne({ email })
  
    if (exists) {
        throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ email, password: hash, dietary_preferences:"", ingredients: []})
  
    return user

}
  

//LogIn validator
userSchema.statics.login = async function(email, password) {
  
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect Email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect Password')
    }
  
    return user
}
  
module.exports = mongoose.model('User', userSchema)

