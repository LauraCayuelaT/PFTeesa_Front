import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/reduxReducer/productSlice';
import detailReducer from '../features/reduxReducer/detailSlice';

export const store = configureStore({
  reducer: {
    productState: productReducer,
    detailState: detailReducer,
  },
});
