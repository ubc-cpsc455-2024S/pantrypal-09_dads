import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API_URL } from '../consts';
import axios from 'axios';

export const generateRecipes = createAsyncThunk('recipes/generateRecipes', async (formData) => {
  let data = JSON.stringify({
    "prompt":formData.prompt
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${API_URL}/recipes/generate`,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${formData.user.token}`
    },
    data : data
  };

  const response = await axios.request(config)
  return response.data
})

export const getRecipes = createAsyncThunk('recipes/getRecipes', async (user) => {
  const response = await axios.get(API_URL + '/recipes/',{
    headers: {'Authorization': `Bearer ${user.token}`},
  })
  return response.data
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
      recipes: [],
      suggestedRecipes:[],
      loading: false
    },
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(generateRecipes.fulfilled, (state, action) => {
          state.suggestedRecipes = action.payload.recipes;
        })
        .addCase(getRecipes.fulfilled, (state, action) => {
          state.recipes = action.payload;
        })
    }
    
  });
  
  export const { } = recipeSlice.actions;
  
  export default recipeSlice.reducer;
