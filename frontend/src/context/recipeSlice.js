import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API_URL } from '../consts';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';

export const generateRecipes = createAsyncThunk('user/generate', async (formData) => {
  const response = await axios.post(API_URL + '/recipes/generate')
  return response.data
})

export const getRecipes = createAsyncThunk('user/getRecipes', async (user) => {
  const response = await axios.get(API_URL + '/recipes/',{
    headers: {'Authorization': `Bearer ${user.token}`},
  })
  return response.data
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
      recipes: [],
      suggestedRecipes:[]
    },
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(generateRecipes.fulfilled, (state, action) => {
          state.recipes = action.payload.recipes;
        })
        .addCase(getRecipes.fulfilled, (state, action) => {
          console.log(action.payload)
          state.recipes = action.payload;
        })
    }
    
  });
  
  export const { } = recipeSlice.actions;
  
  export default recipeSlice.reducer;
