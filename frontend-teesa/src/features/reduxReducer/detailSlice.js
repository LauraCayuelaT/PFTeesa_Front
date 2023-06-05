import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  productDetail: [], // Nuevo estado para almacenar el detail.
  error: '',
};

export const getProductById = createAsyncThunk(
  'products/getProductById',
  async (id) => {
    try {
      const response = await axios.get(
        `https://servidor-teesa.onrender.com/detail/${id}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
);

export const detailSlice = createSlice({
  name: 'detailState',
  initialState,
  reducers: {},
  //GetData
  extraReducers: (builder) => {
    builder.addCase(getProductById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
      state.error = '';
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.loading = false;
      state.productDetail = [];
      state.error = action.error.message;
    });
  },
});

//Exportamos los reducers
//export const {} = detailSlice.actions;

export default detailSlice.reducer;
