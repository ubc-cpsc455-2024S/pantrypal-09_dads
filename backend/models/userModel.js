const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");
const validator = require("validator");

const IngredientSchema = require("./ingredientModel");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dietary_preferences: { type: String, required: false },
  name: { type: String, required: false },
  ingredients: { type: [IngredientSchema], required: true },
});

// Signup Validator
// Note: Followed Express Auth Tutorial https://www.youtube.com/@NetNinja
// ============================================================================
userSchema.statics.signup = async function (email, password) {

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }

  // Enable password validation for real production scenarios
  // if (!validator.isStrongPassword(password)) {
  //     throw Error('Password not strong enough')
  // }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hash,
    dietary_preferences: "",
    name: "New User",
    ingredients: [],
  });

  return user;
};

// Login Validator 
// Note: Followed Express Auth Tutorial https://www.youtube.com/@NetNinja
// ============================================================================
userSchema.statics.login = async function (email, password) {

  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
