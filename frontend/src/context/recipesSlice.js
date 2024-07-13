import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// TODO: remove this and get data from mongoDB
// TODO: replace ID with mongoDB IDs
const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [
      {
        _id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        name: "Spaghetti Carbonara",
        description: "A classic Italian dish made with spaghetti, eggs, bacon, and cheese.",
        equipment: ["ice cream scoop", "kitchen thermometer", "muffin tray", "microwave", "oven", "bowl"],
        vegetarian: false,
        nutrition: {"calories": 500, "fat": 20, "carbs": 60, "protein": 30, "sugar": 10, "sodium": 500},
        ingredients: [{ name: "Spaghetti", quantity: 1, unit: "cup" }, { name: "Eggs", quantity: 2, unit: "pieces" }, { name: "Bacon", quantity: 4, unit: "strips" }, { name: "Parmesan Cheese", quantity: 0.5, unit: "cup" }, { name: "Black Pepper", quantity: 1, unit: "teaspoon"} ],
        steps:  [
          "Mix together ingredients for meatballs in a bowl.Preheat oven to 350F.Grease an 8 hole muffin tin.Use an ice cream scoop to divide out meatball mix and drop into muffin pan.",
          "Bake meatballs, for 35 minutes or until inside reaches 160F on an instant read thermometer.",
          "Drain meatballs on a cookie rack.",
          "Heat marinara sauce and cook spaghetti and rice noodles (separately) according to package directions.",
          "Drain pasta, keep spaghetti warm and cool rice noodles in cold water then drain.Slice meatballs in half horizontally to make two pieces, each with a flat surface.Pat rice noodles dry with paper toweling and layer over the top of the meatball, tucking sliced olives in for eyes.It is best to let the meatballs sit still for about 15 minutes so they become more tacky and hold together better.But since they will get cold, microwave them on a microwave-safe plate for a minute, then carefully place a mummy meatball onto a nest of sauced spaghetti and serve."
        ],
        ratings: [{"user_id": "123", "rating": 5}, {"user_id": "456", "rating": 4}, {"user_id": "789", "rating": 3}],
        time: 30,
        serves: 5
      },
      {
        _id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        name: "Spaghetti Carbonara",
        description: "A classic Italian dish made with spaghetti, eggs, bacon, and cheese.",
        equipment: ["ice cream scoop", "kitchen thermometer", "muffin tray", "microwave", "oven", "bowl"],
        vegetarian: false,
        nutrition: {"calories": 500, "fat": 20, "carbs": 60, "protein": 30, "sugar": 10, "sodium": 500},
        ingredients: [{ name: "Spaghetti", quantity: 1, unit: "cup" }, { name: "Eggs", quantity: 2, unit: "pieces" }, { name: "Bacon", quantity: 4, unit: "strips" }, { name: "Parmesan Cheese", quantity: 0.5, unit: "cup" }, { name: "Black Pepper", quantity: 1, unit: "teaspoon"}],
        steps:  [
          "Mix together ingredients for meatballs in a bowl.Preheat oven to 350F.Grease an 8 hole muffin tin.Use an ice cream scoop to divide out meatball mix and drop into muffin pan.",
          "Bake meatballs, for 35 minutes or until inside reaches 160F on an instant read thermometer.",
          "Drain meatballs on a cookie rack.",
          "Heat marinara sauce and cook spaghetti and rice noodles (separately) according to package directions.",
          "Drain pasta, keep spaghetti warm and cool rice noodles in cold water then drain.Slice meatballs in half horizontally to make two pieces, each with a flat surface.Pat rice noodles dry with paper toweling and layer over the top of the meatball, tucking sliced olives in for eyes.It is best to let the meatballs sit still for about 15 minutes so they become more tacky and hold together better.But since they will get cold, microwave them on a microwave-safe plate for a minute, then carefully place a mummy meatball onto a nest of sauced spaghetti and serve."
        ],
        ratings: [{"user_id": "123", "rating": 5}, {"user_id": "456", "rating": 4}, {"user_id": "789", "rating": 3}],
        time: 30,
        serves: 5
      }
    ],
  },
  reducers: {
    addRecipe: (state, action) => {
      state.items.push(action.payload);
    },
    removeRecipe: (state, action) => {
      state.items = state.items.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
  },
});

export const { addRecipe, removeRecipe } = recipesSlice.actions;

export default recipesSlice.reducer;
