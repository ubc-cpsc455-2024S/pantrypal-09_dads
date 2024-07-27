import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './ingredientSlice';
import recipeReducer from './recipeSlice';
import preferenceReducer from './preferenceSlice';

const store = configureStore({
  reducer: {
    ingredient: ingredientReducer,
    recipe: recipeReducer,
    preference: preferenceReducer
  },
});

export default store;
