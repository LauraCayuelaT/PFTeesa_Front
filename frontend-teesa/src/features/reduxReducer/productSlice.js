import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  allProducts: [],
  brands: [], // Nuevo estado para almacenar las marcas
  filteredProducts: [],
  error: '',
  // pagination:{
  //   currentPage: 1,
  //   itemsPage: 6,
  //   totalPage: 1,
  // }
  general: [],
};

//Traer los productos
export const getApiData = createAsyncThunk('products/getApiData', async () => {
  try {
    const response = await axios.get(
      'https://servidor-teesa.onrender.com/products'
    );
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
});

//Traer la Data en General
export const getPaginationData = createAsyncThunk(
  'products/getPaginationData',
  async (number) => {
    try {
      const response = await axios.get(
        `https://servidor-teesa.onrender.com/products?page=${number}`
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
);

//Filtro Marcas Sol

export const getBrands = createAsyncThunk('products/getBrands', async () => {
  try {
    const response = await axios.get(
      'https://servidor-teesa.onrender.com/brands'
    );
    return response.data; // Actualiza aquí para acceder a response.data
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
});

export const productSlice = createSlice({
  name: 'productState',
  initialState,
  reducers: {},
  //*GetData
  extraReducers: (builder) => {
    //Cargando productos
    builder.addCase(getApiData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getApiData.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = '';
    });
    builder.addCase(getApiData.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = action.error.message;
    });

    //*Paginado

    // builder.addCase(getPaginationData.pending, (state) => {

    // });
    builder.addCase(getPaginationData.fulfilled, (state, action) => {
      state.general = action.payload;
    });
    // builder.addCase(getPaginationData.rejected, (state, action) => {

    // });

    //*Cargando marcas
    builder.addCase(getBrands.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.loading = false;
      const newBrands = action.payload;
      state.brands = [...new Set([...state.brands, ...newBrands])]; // Filtrar duplicados
      state.error = '';
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.loading = false;
      state.brands = [];
      state.error = action.error.message;
    });
  },
});

//Exportamos los reducers
export const { increment, FilterByName, sortByName, sortByPrice, sortByBrand } =
  productSlice.actions;

export default productSlice.reducer;
