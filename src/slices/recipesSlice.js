import { createSlice } from '@reduxjs/toolkit';

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    items: [],
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
