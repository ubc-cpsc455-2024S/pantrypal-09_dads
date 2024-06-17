import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Carrot', quantity: 3, unit: 'pcs' },
    { id: 2, name: 'Potato', quantity: 50, unit: 'g' },
    { id: 3, name: 'Tomato', quantity: 4, unit: 'kg' },
  ],
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.items.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.items = state.items.filter(
        (ingredient) => ingredient.id !== action.payload
      );
    },
    changeUnit: (state, action) => {
      const { id, newUnit } = action.payload;
      const ingredient = state.items.find((ingredient) => ingredient.id === id);
      if (ingredient) {
        ingredient.unit = newUnit;
      }
    },
    changeQuantity: (state, action) => {
      const { id, newQuantity } = action.payload;
      const ingredient = state.items.find((ingredient) => ingredient.id === id);
      if (ingredient) {
        ingredient.quantity = newQuantity;
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
  changeUnit,
  changeQuantity,
  clearIngredients,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
