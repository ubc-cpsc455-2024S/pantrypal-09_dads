import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const generateIngredients = createAsyncThunk('user/generateIngredients', async (image) => {
  const response = await axios.post('http://localhost:3000/ingredients/generate', image)
  return response.data
})

export const getUser = createAsyncThunk('user/getUser', async (username) => {
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

// TODO: remove this and get data from mongoDB
// TODO: replace ID with mongoDB IDs
const userSlice = createSlice({
    name: 'user',
    initialState: {
      _id: null,
      username: "adi",
      email: "adipoluri@gmail.com",
      preferences: {
        cuisine: [],
        diet: [],
        allergies: [],
      },
      history: [],
      favorites: [],
      ingredients: [],
      status: "default",
    },
    reducers: {
      //User Reducers
      setUser: (state, action) => {
        state._id = action.payload._id;
        state.username = action.payload.username;
        state.email = action.payload.email;
        state.preferences = action.payload.preferences;
        state.history = action.payload.history;
        state.favorites = action.payload.favorites;
        state.ingredients = action.payload.ingredients;
      },
      logoutUser: (state) => {
        state._id = null;
        state.username = null;
        state.email = null;
        state.preferences = {
          cuisine: [],
          diet: [],
          allergies: [],
        };
        state.history = [];
        state.favorites = [];
        state.ingredients = [];
      },

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

      //State Management
      goToIngredients: (state) => {
        if(state.ingredients.length > 0) {
          state.status = 'ingredients';
        } else {
          state.status = 'default';
        }
      },
      goToRecipes: (state) => {
        state.status = 'recipes'
        // if(state.ingredients.length > 0) {
        //   state.status = 'ingredients';
        // } else {
        //   state.status = 'default';
        // }
      }
    },
    extraReducers(builder) {
      builder
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
        .addCase(getUser.fulfilled, (state, action) => {
          state.ingredients = action.payload.ingredients.items;
          state._id = action.payload._id;
        })
        .addCase(updateIngredients.fulfilled, (state, action) => {
          console.log(action.payload)
          state.ingredients = action.payload.ingredients.items;
        })
    }
    
  });
  
  export const { setUser, logoutUser, goToIngredients, addIngredient, removeIngredient, editIngredient, clearIngredients} = userSlice.actions;
  
  export default userSlice.reducer;
