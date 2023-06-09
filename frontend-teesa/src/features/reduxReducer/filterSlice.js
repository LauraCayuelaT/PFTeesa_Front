import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'filters/fetchProducts',
  async (filters, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams(filters).toString();
      const response = await axios.get(
        `https://servidor-teesa.onrender.com/products?${queryParams}`
      );
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {},
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { addFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
