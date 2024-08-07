import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../consts";
import axios from "axios";

export const getPreference = createAsyncThunk("preferences/getPreferences", async (user) => {
  const response = await axios.get(API_URL + "/preferences/", {
    headers: { Authorization: `Bearer ${user.token}` },
  });
  
  return response.data;
});

export const setPreference = createAsyncThunk("preferences/setPreferences", async (formData) => {
  let data = JSON.stringify({
    preferences: formData.preferences,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${API_URL}/preferences/set`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${formData.user.token}`,
    },
    data: data,
  };

  const response = await axios.request(config);
  return response.data;
});

export const getName = createAsyncThunk("preferences/getName", async (user) => {
  const response = await axios.get(API_URL + "/preferences/name", {
    headers: { Authorization: `Bearer ${user.token}` },
  });
  return response.data;
});

export const setName = createAsyncThunk("preferences/name/set",async (formData) => {
  let data = JSON.stringify({
    name: formData.name,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${API_URL}/preferences/name/set`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${formData.user.token}`,
    },
    data: data,
  };

  const response = await axios.request(config);
  return response.data;
});

const prefernceSlice = createSlice({
  name: "preferences",
  initialState: {
    preferences: "",
    name: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPreference.fulfilled, (state, action) => {
        state.preferences = action.payload.preferences;
      })
      .addCase(setPreference.fulfilled, (state, action) => {
        state.preferences = action.payload.preferences;
      })
      .addCase(getName.fulfilled, (state, action) => {
        state.name = action.payload.name;
      })
      .addCase(setName.fulfilled, (state, action) => {
        state.name = action.payload.name;
      });
  },
});

export default prefernceSlice.reducer;
