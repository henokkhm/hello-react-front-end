import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/';

const initialState = {
  phrase: 'Hello',
  language: 'English',
  isLoading: true,
  isError: true,
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    try {
      const response = await fetch(`${API_BASE_URL}greetings`);
      const data = await response.json();
      return data.greeting;
    } catch (error) {
      throw new Error('Failed to fetch greeting');
    }
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.language = action.payload.language;
        state.phrase = action.payload.phrase;
        state.isError = false;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default greetingSlice.reducer;
