const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {  //Passwords are stored as hashes and not in plaintext
    type: String,
    required: true
  }
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
  
    const user = await this.create({ email, password: hash })
  
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


/*

// Used to insert a new user into the database
// Expects a username, email, passwordHash
router.post('/auth/signup', async (req, res) => {
  const db = getDb();

  const { username, email, passwordHash } = req.body;

  if (!username || !email || !passwordHash) {
      return res.status(400).send('Missing required fields');
  }

  try {
      const existingUser = await db.collection('users').findOne({ username });
      if (existingUser) {
          return res.status(409).send('Username already exists');
      }

      const newUser = {
          username,
          email,
          passwordHash,
          ingredients: [],
          recipes: [],
          favorites: []
      };

      await db.collection('users').insertOne(newUser);
      
      console.log('User created successfully')
      res.status(201).send('User created successfully');

  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Error creating user');
  }
});



*/