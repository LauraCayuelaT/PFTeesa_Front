/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  errorMessage: '',
  success: false,
  ProductChart: null
};

export const createProduct = createAsyncThunk(
  'admin/createProduct',
  async (payload, { rejectWithValue }) => {
    const {
      nombre,
      tipo,
      caracteristicas,
      categoria,
      imagenes,
      precio,
      stock,
      marca,
      descripcion,
      ref,
      estado,
      id,
    } = payload;
    console.log(payload);
    try {
      const response = await axios.post(
        'https://servidor-teesa.onrender.com/products',
        payload
      );
      console.log(response);
      return response;
    } catch (error) {
      // Manejar cualquier error aquí
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  'admin/editProduct',
  async (payload) => {
    try {
      const { imagenes, precio, stock } = payload.data;
      const { ProductID } = payload;
      const response = await axios.put(
        `https://servidor-teesa.onrender.com/detail/${ProductID}`,
        { imagenes, precio, stock }
      );

      console.log('Respuesta de la solicitud PUT:', response.data);

      return response.data;
    } catch (error) {
      console.log('error', error.response.data.message);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al actualizar su información, inténtelo de nuevo.',
        icon: 'warning',
      });
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'admin/deleteProduct',
  async (ProductID) => {
    try {
      const response = await axios.delete(
        `https://servidor-teesa.onrender.com/products/${ProductID}`
      );
      console.log('Respuesta de la solicitud DELETE:', response.data);
      return response.data;
    } catch (error) {
      console.log('error', error.response.data.message);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al eliminar el producto, inténtelo de nuevo.',
        icon: 'warning',
      });
      throw error;
    }
  }
);

export const getProductsChart = createAsyncThunk(
  'admin/getProductsChart',
  async () => {
    try {
      const response = await axios.get(
        `https://servidor-teesa.onrender.com/purchase`
      );
      return response;
    } catch (error) {
      console.log('ERROR', error.response.data.message);
      throw error;
    }
  }
);


const adminProductSlice = createSlice({
  name: 'adminProductState',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorMessage = null;
    });
    builder.addCase(createProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(editProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorMessage = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
    builder.addCase(getProductsChart.fulfilled, (state, action) => {
      const responseData = action.payload.data; // Obtener la información actualizada del servidor
      state.ProductChart = responseData;
    });
  },
});

export default adminProductSlice.reducer;
