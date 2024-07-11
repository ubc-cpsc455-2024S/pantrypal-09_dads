const Users = require('../models/userModel')
const mongoose = require('mongoose')

// get all ingredients from user
const getIngredients = async (req, res) => {
  res.status(200).json({message: 'getIngredients'})
}

// get all ingredients from user
const generateIngredients = async (req, res) => {
  res.status(200).json({message: 'getIngredients'})
}

// get all ingredients from user
const updateIngredients = async (req, res) => {
  res.status(200).json({message: 'getIngredients'})
}

// delete a workout
const addIngredients = async (req, res) => {
  res.status(200).json({message: 'getIngredients'})
}

const deleteIngredients = async (req, res) => {
  res.status(200).json({message: 'getIngredients'})
}

module.exports = {
  getIngredients,
  generateIngredients,
  updateIngredients,
  addIngredients,
  deleteIngredients
}