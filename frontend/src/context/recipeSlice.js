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

export const deleteRecipe = createAsyncThunk('recipes/delete', async (formData) => {
  const response = await axios.delete(API_URL + '/recipes/'+ formData.id,{
    headers: {'Authorization': `Bearer ${formData.user.token}`},
  })
  
  return response.data
})


export const addRecipe = createAsyncThunk('recipes/add', async (formData) => {
  let data = JSON.stringify({
    "recipe":formData.recipe
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${API_URL}/recipes/add`,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${formData.user.token}`
    },
    data : data
  };

  const response = await axios.request(config)
  return response.data
})

export const getRecipe = createAsyncThunk('recipes/getRecipe', async (formData) => {
  const response = await axios.get(API_URL + '/recipes/' + formData.id,{
    headers: {'Authorization': `Bearer ${formData.user.token}`},
  })
  console.log(response)
  return response.data
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
      recipes: [],
      suggestedRecipes:[],
      singleRecipe: null,
      loading: false
    },
    reducers: {
      setLoading(state, action) {
        state.loading = action.payload
      },
      deleteSuggestedRecipe(state, action) {
        console.log(action.payload)
        state.suggestedRecipes = action.payload
      }
    },
    extraReducers(builder) {
      builder
        .addCase(generateRecipes.fulfilled, (state, action) => {
          state.suggestedRecipes = action.payload.recipes;
          state.loading = false;
        })
        .addCase(getRecipes.fulfilled, (state, action) => {
          state.recipes = action.payload;
        })
        .addCase(getRecipe.fulfilled, (state, action) => {
          state.singleRecipe = action.payload;
        })
        .addCase(addRecipe.fulfilled, (state, action) => {
          state.suggestedRecipes = state.suggestedRecipes.filter(recipe => recipe.name !== action.name)
          state.recipes = action.payload;
        })
        .addCase(deleteRecipe.fulfilled, (state, action) => {
          state.recipes = action.payload;
        })
    }
    
  });
  
  export const { setLoading, deleteSuggestedRecipe } = recipeSlice.actions;
  
  export default recipeSlice.reducer;
