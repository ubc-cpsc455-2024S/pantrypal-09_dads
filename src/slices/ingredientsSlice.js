import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// TODO: remove this and get data from mongoDB
// TODO: replace ID with mongoDB IDs
const initialState = {
  items: [
      {
        id: uuidv4(),
        name: "Flour",
        quantity: 2,
        unit: "cups",
        category: "All-purpose flour",
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg"
      },
      {
        id: uuidv4(),
        name: "Eggs",
        quantity: 4,
        unit: "pieces",
        category: "Dairy",
        image: "https://www.eatingwell.com/thmb/QYZnBgF72TIKI6-A--NyoPa6avY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-salmon-bowl-f681500cbe054bb1adb607ff55094075.jpeg"
      },
  ],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      const newIngredient = {
        id: uuidv4(),
        ...action.payload,
      };
      state.items.push(newIngredient);
    },
    removeIngredient: (state, action) => {
      state.items = state.items.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    editIngredient: (state, action) => {
      const index = state.items.findIndex(ingredient => ingredient.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
      }
    },
    clearIngredients: (state) => {
      state.items = [];
    },
  },
});

export const {
  addIngredient,
  removeIngredient,
  editIngredient,
  clearIngredients,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
