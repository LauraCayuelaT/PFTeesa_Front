import registerReducer from '../features/reduxReducer/registerSlice';
import mercadoReducer from '../features/reduxReducer/mercadoSlice';
import carritoReducer from '../features/reduxReducer/carritoSlice';
import productReducer from '../features/reduxReducer/productSlice';
import filtersReducer from '../features/reduxReducer/filterSlice';
import reviewReducer from '../features/reduxReducer/reviewSlice';
import detailReducer from '../features/reduxReducer/detailSlice';
import loginReducer from '../features/reduxReducer/loginSlice';
import userReducer from '../features/reduxReducer/userSlice';
import adminReducer from '../features/reduxReducer/admproductSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    registerState: registerReducer,
    productState: productReducer,
    mercadoState: mercadoReducer,
    reviewState: reviewReducer,
    detailState: detailReducer,
    loginState: loginReducer,
    filters: filtersReducer,
    userState: userReducer,
    app: carritoReducer,
    adminProductState: adminReducer,
  },
});
