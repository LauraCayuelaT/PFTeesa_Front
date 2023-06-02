import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  allProducts: [],
  error: '',
};

export const getApiData = createAsyncThunk('products/getApiData', async () => {
  try {
    const response = await axios.get(
      'https://servidor-teesa.onrender.com/products'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});

export const productSlice = createSlice({
  name: 'productState',
  initialState,
  reducers: {
    // filterByName: (state) => {
    //   state.allProducts = aqui los filtras;
    // },
  },
  //GetData
  extraReducers: (builder) => {
    //Cargando
    builder.addCase(getApiData.pending, (state) => {
      state.loading = true;
    });
    // Exito
    builder.addCase(getApiData.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = '';
    });
    // Fallo
    builder.addCase(getApiData.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = action.error.message;
    });
  },
});

//Exportamos los reducers
export const { increment } = productSlice.actions;

export default productSlice.reducer;
