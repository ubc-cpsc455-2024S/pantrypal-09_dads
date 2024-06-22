import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [
      {
        id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        title: "Spaghetti Carbonara",
        readyInMinutes: 30,
        calories: 500,
        likes: 150,
        time: "30 minutes"
    },
    {
        id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        title: "Chicken Alfredo",
        readyInMinutes: 45,
        calories: 650,
        likes: 200,
        time: "45 minutes"
    },
    {
        id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        title: "Caesar Salad",
        readyInMinutes: 20,
        calories: 300,
        likes: 100,
        time: "20 minutes"
    },
    {
        id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        title: "Beef Tacos",
        readyInMinutes: 25,
        calories: 400,
        likes: 180,
        time: "25 minutes"
    },
    {
        id: uuidv4(),
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg",
        title: "Vegetarian Pizza",
        readyInMinutes: 35,
        calories: 550,
        likes: 220,
        time: "35 minutes"
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
