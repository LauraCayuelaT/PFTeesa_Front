import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  linkMercado: null,
  status: 'idle',
  error: null,
};

export const postLinkMercado = createAsyncThunk(
  'mercado/postLinkMercado',
  async (id) => {
    try {
      const response = await axios.post(
        `https://servidor-teesa.onrender.com/mercadopago/create_order/${id}`
      );
      const { link } = response.data;
      return link;
    } catch (error) {
      throw Error('Error al realizar la petición');
    }
  }
);

const mercadoSlice = createSlice({
  name: 'mercadoState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postLinkMercado.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(postLinkMercado.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.linkMercado = action.payload;
      })
      .addCase(postLinkMercado.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      });
  },
});

export default mercadoSlice.reducer;
