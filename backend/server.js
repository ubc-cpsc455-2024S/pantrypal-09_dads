// Dependencies
// ============================================================================
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require('dotenv').config()

//const ingredientsRouter = require('./routes/ingredients');
const authRouter = require('./routes/auth');
const recipesRouter = require('./routes/recipes');

// Initialise Express
// ============================================================================
const app = express();

// Middleware
// ============================================================================
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// Routes
// ============================================================================
app.use('/api/auth', authRouter);
//app.use('/api/user', ingredientsRouter);
app.use('/api/recipes', recipesRouter);

// Database Connection
// ============================================================================
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to Database! Listening on Port: ', process.env.PORT)
    })
})
.catch((error) => {
console.log(error)
})


module.exports = app;
