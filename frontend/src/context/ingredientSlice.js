import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API_URL } from '../consts';
import axios from 'axios';

export const generateIngredients = createAsyncThunk('user/generateIngredients', async (image) => {
  const response = await axios.post('http://localhost:3000/ingredients/generate', image)
  return response.data
})

export const getIngredients = createAsyncThunk('user/getUser', async (user) => {
  const response = await axios.get(API_URL + '/ingredients/',{
    headers: {'Authorization': `Bearer ${user.token}`},
  })

  return response.data
})

export const updateIngredients = createAsyncThunk('user/updateIngredients', async (formData) => {
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


// TODO: remove this and get data from mongoDB
// TODO: replace ID with mongoDB IDs
const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState: {
      preferences: "",
      ingredients: [],
      status: 'default'
    },
    extraReducers(builder) {
      builder
        .addCase(getIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients;
        })
        .addCase(generateIngredients.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(generateIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients;
          state.status = 'ingredients'
        })
        .addCase(generateIngredients.rejected, (state, action) => {
          state.status = 'default'
        })
        .addCase(updateIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients;
        })
    }
    
  });
    
  export default ingredientSlice.reducer;