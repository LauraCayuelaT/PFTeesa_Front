// ReduxReducer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  allProducts: [],
  brands: [], // Nuevo estado para almacenar las marcas
  filteredProducts: [],
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
//Filtro Marcas
export const getBrands = createAsyncThunk('products/getBrands', async () => {
  try {
    const response = await axios.get(
      'https://servidor-teesa.onrender.com/brands'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
});

export const productSlice = createSlice({
  name: 'productState',
  initialState,
  reducers: {
    sortByName: (state, action) => {
      state.allProducts.sort((a, b) => {
        if (action.payload === 'ascendente') {
          return a.nombre.toLowerCase().localeCompare(b.nombre.toLowerCase());
        } else if (action.payload === 'descendente') {
          return b.nombre.toLowerCase().localeCompare(a.nombre.toLowerCase());
        }
        return 0;
      });
    },

    sortByPrice: (state, action) => {
      state.allProducts.sort((a, b) => {
        if (action.payload === 'precio_min') {
          return a.precio - b.precio;
        } else if (action.payload === 'precio_max') {
          return b.precio - a.precio;
        }
        return 0;
      });
    },
    // sortByBrand: (state, action) => {
    //   if (action.payload === 'todos') {
    //     state.filteredProducts = state.allProducts;
    //   } else {
    //     state.filteredProducts = state.allProducts.filter(
    //       (product) => product.marca === action.payload
    //     );
    //   }

  },


  //GetData
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

    //Cargando marcas
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
export const {

  increment,
  FilterByName,
  sortByName,
  sortByPrice,
  sortByBrand,
  sortByCondition,
} = productSlice.actions;

export default productSlice.reducer;
