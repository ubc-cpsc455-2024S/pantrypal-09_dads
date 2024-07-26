import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const generateIngredients = createAsyncThunk('user/generateIngredients', async (image) => {
  const response = await axios.post('http://localhost:3000/ingredients/generate', image)
  return response.data
})

export const getIngredients = createAsyncThunk('user/getUser', async (username) => {
  const response = await axios.get('http://localhost:3000/ingredients', 
    {
      params: {
        username: username
      }
    })
  return response.data
})

export const updateIngredients = createAsyncThunk('user/updateIngredients', async (formData) => {
  const response = await axios.post('http://localhost:3000/ingredients/update',  formData)
  return response.data
})

export const generateRecipes = createAsyncThunk('user/generate', async (formData) => {
  const response = await axios.post('http://localhost:3000/recipes/generate', formData)
  return response.data
})


// TODO: remove this and get data from mongoDB
// TODO: replace ID with mongoDB IDs
const ingredientSlice = createSlice({
    name: 'ingredients',
    initialState: {
      preferences: "",
      ingredients: []
    },
    reducers: {
      //Ingredients
      addIngredient: (state, action) => {
        const newIngredient = {
          id: uuidv4(),
          ...action.payload,
        };
        state.ingredients.push(newIngredient);
      },
      editIngredient: (state, action) => {
        const index = state.ingredients.findIndex(ingredient => ingredient.id === action.payload.id);
        if (index !== -1) {
          state.ingredients[index] = { ...state.ingredients[index], ...action.payload };
        }
      },
      clearIngredients: (state) => {
        state.ingredients = [];
      },
    },
    extraReducers(builder) {
      builder
        .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload.ingredients.items;
        })
        .addCase(generateIngredients.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(generateIngredients.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients.items;
          state.status = 'ingredients'
        })
        .addCase(generateIngredients.rejected, (state, action) => {
          state.status = 'default'
        })
        .addCase(updateIngredients.fulfilled, (state, action) => {
          console.log(action.payload)
          state.ingredients = action.payload.ingredients.items;
        })
    }
    
  });
  
  export const {addIngredient, removeIngredient, editIngredient, clearIngredients} = ingredientSlice.actions;
  
  export default ingredientSlice.reducer;
