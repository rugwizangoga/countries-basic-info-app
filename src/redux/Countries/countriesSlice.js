import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the asynchronous thunk
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  },
);

// Create the slice
const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countries: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

// Export the reducer
export default countriesSlice.reducer;
