import { createSlice, createAsyncThunk } from "/node_modules/.vite/deps/@reduxjs_toolkit.js?v=bdd0b4bc";
import axios from "/node_modules/.vite/deps/axios.js?v=bdd0b4bc";

const initialState = {
  loading: false,
  allProducts: [],
  productDetail: [],
  error: '',
};

export const getProductById = createAsyncThunk('products/getApiData', async (id) => {
  try {
    const response = await axios.get(
      `https://servidor-teesa.onrender.com/detail/${id}`
      );
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
});

export const productSlice2 = createSlice({
  name: 'productState',
  initialState,
  reducers: {},
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

export default productSlice2.reducer;