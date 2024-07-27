import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API_URL } from '../consts';
import axios from 'axios';


export const getPreference = createAsyncThunk('preferences/getPreferences', async (user) => {
  const response = await axios.get(API_URL + '/preferences/',{
    headers: {'Authorization': `Bearer ${user.token}`},
  })
  return response.data
})

export const setPreference = createAsyncThunk('preferences/setPreferences', async (formData) => {
    console.log(formData)
    let data = JSON.stringify({
        "preferences":formData.preferences
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${API_URL}/preferences/set`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${formData.user.token}`
        },
        data : data
      };
    
      const response = await axios.request(config)
      return response.data
  })

const prefernceSlice = createSlice({
    name: 'preferences',
    initialState: {
      preferences: "",
    },
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(getPreference.fulfilled, (state, action) => {
            state.preferences = action.payload.preferences;
        })
        .addCase(setPreference.fulfilled, (state, action) => {
            state.preferences = action.payload.preferences;
        })
    }
    
  });
    
  export default prefernceSlice.reducer;
