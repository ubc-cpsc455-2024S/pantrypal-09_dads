// Dependencies
// ============================================================================
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectToDb } = require('./utils/database');
require('dotenv').config()

//const ingredientsRouter = require('./routes/ingredients');
const authRouter = require('./routes/auth');
const recipesRouter = require('./routes/recipes');
const ingredientsRouter = require('./routes/ingredients')
const preferencesRouter = require('./routes/preferences')

// Initialise Express
// ============================================================================
const app = express();

// Middleware
// ============================================================================
const corsOptions = {
  origin: process.env.CORS_ORIGIN // frontend URI (ReactJS)
}
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// Routes
// ============================================================================
app.use('/api/auth', authRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/preferences', preferencesRouter);

// Database Connection and Server Start
// ============================================================================
const startServer = () => {
  if (process.env.NODE_ENV !== 'test') {
    connectToDb().then(() => {
      app.listen(process.env.PORT, () => {
        console.log('Listening on Port: ', process.env.PORT)
      });
    });
  }
};

startServer();

module.exports = app;
