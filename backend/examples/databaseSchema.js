var userSchema = new Schema({
    _id: { type: Number, default: null }, // Make _id optional
    username: { type: Number, min: 1, index: true },
    email: { type: String, match: /.+\@.+\..+/ }, // Basic email regex
    passwordHash: { type: String, match: /[a-fA-F0-9]{64}/ }, // Assuming SHA-256 hash
    ingredients: { type: Map }, // <Ingredient, Quantity> Map of ingredients available to user
    recipes: { type: Array }, // An array of user generated recipeIDs
    favorites: { type: Array } // An array of recipeIDs favourited by user
});

var recipeSchema = new Schema({
    _id: { type: Number },
    recipe: { type: String, match: /[a-zA-Z ]/ },
    ingredients: { type: Map }, // <Ingredient, Quantity>
    ratings: { type: Array } // An array with members <User, Rating, Comment>
});