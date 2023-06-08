import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/reduxReducer/productSlice';
import detailReducer from '../features/reduxReducer/detailSlice';
import loginReducer from '../features/reduxReducer/loginSlice';
import registerReducer from '../features/reduxReducer/registerSlice';

export const store = configureStore({
  reducer: {
    productState: productReducer,
    detailState: detailReducer,
    loginState: loginReducer,
    registerState: registerReducer,
  },
});
