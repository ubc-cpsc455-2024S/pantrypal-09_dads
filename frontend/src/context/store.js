import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
  },
});

export default store;
