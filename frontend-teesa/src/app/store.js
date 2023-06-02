import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/reduxReducer/productSlice';

export const store = configureStore({
  reducer: {
    productState: productReducer,
  },
});
