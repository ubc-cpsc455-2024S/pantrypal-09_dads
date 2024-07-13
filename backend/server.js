const express = require('express');
const cors = require('cors');
const { connectToDb } = require('./database'); // Import the MongoDB connection
const ingredientsRouter = require('./routes/ingredients');
const authRouter = require('./routes/auth');
const recipesRouter = require('./routes/recipes');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', authRouter);
app.use('/', ingredientsRouter); 
app.use('/', recipesRouter); 

const imageUploadPath = './temp';

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, `${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

const imageUpload = multer({storage: storage})

app.post('/image-upload', imageUpload.array("my-image-file"), (req, res) => {
  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})
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

// Connect to MongoDB and start the server
connectToDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(error => {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process with failure
});