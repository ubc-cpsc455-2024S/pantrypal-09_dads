import { createSlice } from '@reduxjs/toolkit';

// TODO: remove this and get data from mongoDB
// TODO: replace ID with mongoDB IDs
const userSlice = createSlice({
    name: 'user',
    initialState: {
      _id: null,
      username: null,
      email: null,
      passwordHash: null,
      preferences: {
        cuisine: [],
        diet: [],
        allergies: [],
      },
      history: [],
      favorites: [],
      ingredients: [],
    },
    reducers: {
      setUser: (state, action) => {
        state._id = action.payload._id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.passwordHash = action.payload.passwordHash;
        state.preferences = action.payload.preferences;
        state.history = action.payload.history;
        state.favorites = action.payload.favorites;
        state.ingredients = action.payload.ingredients;
      },
      logoutUser: (state) => {
        state._id = null;
        state.username = null;
        state.email = null;
        state.passwordHash = null;
        state.preferences = {
          cuisine: [],
          diet: [],
          allergies: [],
        };
        state.history = [];
        state.favorites = [];
        state.ingredients = [];
      },
    },
  });
  
  export const { setUser, logoutUser } = userSlice.actions;
  
  export default userSlice.reducer;
