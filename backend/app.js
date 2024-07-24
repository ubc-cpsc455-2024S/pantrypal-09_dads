const express = require('express');
const cors = require('cors');
const { connectToDb, closeDb } = require('./database'); // Import the MongoDB connection
const ingredientsRouter = require('./routes/ingredients');
const authRouter = require('./routes/auth');
const recipesRouter = require('./routes/recipes');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', authRouter);
app.use('/', ingredientsRouter);
app.use('/', recipesRouter);

// Error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
