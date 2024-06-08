import { createSlice } from '@reduxjs/toolkit';

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    items: [],
  },
  reducers: {
    addIngredient: (state, action) => {
      state.items.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.items = state.items.filter(
        (ingredient) => ingredient !== action.payload
      );
    },
  },
});

export const { addIngredient, removeIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
