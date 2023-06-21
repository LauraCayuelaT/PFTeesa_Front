import registerReducer from '../features/reduxReducer/registerSlice';
import productReducer from '../features/reduxReducer/productSlice';
import filtersReducer from '../features/reduxReducer/filterSlice';
import mercadoReducer from '../features/reduxReducer/mercadoSlice';
import detailReducer from '../features/reduxReducer/detailSlice';
import loginReducer from '../features/reduxReducer/loginSlice';
import userReducer from '../features/reduxReducer/userSlice';
import carritoReducer from '../features/reduxReducer/carritoSlice';
import adminReducer from '../features/reduxReducer/adminSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    registerState: registerReducer,
    productState: productReducer,
    mercadoState: mercadoReducer,
    detailState: detailReducer,
    loginState: loginReducer,
    filters: filtersReducer,
    userState: userReducer,
    app: carritoReducer,
    admin: adminReducer,
  },
});
