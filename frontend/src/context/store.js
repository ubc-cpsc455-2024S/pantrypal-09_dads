import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredientSlice';
import recipeReducer from './recipeSlice';

const store = configureStore({
  reducer: {
    ingredient: ingredientReducer,
    recipe: recipeReducer
  },
});

export default store;
