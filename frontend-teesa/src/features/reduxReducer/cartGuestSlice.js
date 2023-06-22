import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  success: false,
  errorMessage: '',
  cartGuestProducts: [],
};

export const postCartGuestProducts = createAsyncThunk(
  'cartGuestProducts/postCartGuestProducts',
  async ({ ProductId, cantidad }, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://servidor-teesa.onrender.com/cartGuestProducts', {
        ProductId,
        cantidad,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.error || 'Error al enviar el carrito');
    }
  }
);

export const getCartGuestProducts = createAsyncThunk('cartGuestProducts/getCartGuestProducts', async (userId) => {
  try {
    const response = await axios.get(`https://servidor-teesa.onrender.com/cartGuestProducts?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    throw error;
  }
});

export const updateCartGuestProducts = createAsyncThunk('cartGuestProducts/updateCartGuestProducts', 
async ({ CartGuestProductId, cantidad }) => {
  try {
    
    const response = await axios.put(`https://servidor-teesa.onrender.com/cartGuestProducts/${CartGuestProductId}`, 
    {cantidad });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    throw error;
  }
});

export const deleteCartGuestProducts = createAsyncThunk('cartGuestProducts/deleteCartGuestProducts', 
async (CartGuestProductId) => {
  try {
    
    const response = await axios.delete(`https://servidor-teesa.onrender.com/cartGuestProducts/${CartGuestProductId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    throw error;
  }
});

const cartGuestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCartGuestProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.errorMessage = null;
      })
      .addCase(postCartGuestProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success= true;
        state.cartGuestProducts = action.payload;
      })
      .addCase(postCartGuestProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(getCartGuestProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.cartGuestProducts = null;
      })
      .addCase(getCartGuestProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success= true;
        state.cartGuestProducts = action.payload;
      })
      .addCase(getCartGuestProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(updateCartGuestProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.errorMessage = null;
      })
      .addCase(updateCartGuestProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success= true;
        state.cartGuestProducts = action.payload;
      })
      .addCase(updateCartGuestProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      .addCase(deleteCartGuestProducts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.errorMessage = null;
      })
      .addCase(deleteCartGuestProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.success= true;
        state.cartGuestProducts = action.payload;
      })
      .addCase(deleteCartGuestProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
  },
});

export default cartGuestSlice.reducer;