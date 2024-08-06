import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API_URL } from '../consts';
import axios from 'axios';

export const generateIngredients = createAsyncThunk('ingredients/generateIngredients', async (user) => {
  const response = await axios.post(`${API_URL}/ingredients/generate`, user.image, {
    headers: {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${user.user.token}`
    }
  })

  return response.data
})

export const getIngredients = createAsyncThunk('ingredients/getIngredients', async (user) => {
  const response = await axios.get(API_URL + '/ingredients/',{
    headers: {'Authorization': `Bearer ${user.token}`},
  })

  return response.data
})

export const updateIngredients = createAsyncThunk('ingredients/updateIngredients', async (formData) => {
  let data = JSON.stringify({
    "ingredients":formData.ingredients
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${API_URL}/ingredients/update`,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${formData.user.token}`
    },
    data : data
  };

  const response = await axios.request(config)
  return response.data
})


const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState: {
      preferences: "",
      ingredients: [],
      loading: false,
    },
    extraReducers(builder) {
      builder
        .addCase(getIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients;
        })
        .addCase(generateIngredients.pending, (state, action) => {
          state.loading = true
        })
        .addCase(generateIngredients.fulfilled, (state, action) => {
          console.log(action.payload.ingredients)
          state.ingredients = action.payload.ingredients;
          state.loading = false
        })
        .addCase(generateIngredients.rejected, (state, action) => {
          state.loading = false
        })
        .addCase(updateIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients;
        })
    }
    
  });
    
  export default ingredientSlice.reducer;
