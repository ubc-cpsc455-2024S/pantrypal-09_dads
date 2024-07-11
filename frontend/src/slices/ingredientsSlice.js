import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: [
      {
        id: uuidv4(),
        name: "Flour",
        quantity: 2,
        unit: "cups",
        notes: "All-purpose flour"
      },
      {
        id: uuidv4(),
        name: "Sugar",
        quantity: 1,
        unit: "cup",
        notes: "Granulated white sugar"
      },
      {
        id: uuidv4(),
        name: "Butter",
        quantity: 0.5,
        unit: "cup",
        notes: "Unsalted, melted"
      },
      {
        id: uuidv4(),
        name: "Eggs",
        quantity: 2,
        unit: "pieces",
        notes: "Large"
      },
      {
        id: uuidv4(),
        name: "Baking Powder",
        quantity: 1,
        unit: "teaspoon",
        notes: ""
      },
      {
        id: uuidv4(),
        name: "Salt",
        quantity: 0.5,
        unit: "teaspoon",
        notes: ""
      },
      {
        id: uuidv4(),
        name: "Vanilla Extract",
        quantity: 1,
        unit: "teaspoon",
        notes: "Pure vanilla extract"
      },
      {
        id: uuidv4(),
        name: "Milk",
        quantity: 1,
        unit: "cup",
        notes: "Whole milk"
      }
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
