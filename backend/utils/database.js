const mongoose = require("mongoose");
require('dotenv').config()

const connectToDb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('Connected to Database!');
    } catch (error) {
      console.error('Error connecting to the database: ', error);
    }
};

const closeDb = async () => {
    await mongoose.connection.close();
}

const getDb = () => {
    return mongoose.connection;
}

module.exports = { connectToDb, closeDb, getDb };