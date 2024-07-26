import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredientSlice';
import recipeReducer from './recipeSlice';

const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    recipe: recipeReducer
  },
});

export default store;
