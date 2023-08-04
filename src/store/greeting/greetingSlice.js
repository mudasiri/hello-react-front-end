import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiRootURL = 'http://localhost:3000/api/v1';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch(`${apiRootURL}/greeting`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return 'fails';
    }
    return data;
  },
);

const initialState = {
  message: '',
  loading: true,
};

export const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        message: action.payload.message,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        loading: false,
      }));
  },
});

export default GreetingSlice.reducer;
