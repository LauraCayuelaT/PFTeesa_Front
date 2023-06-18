import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';

const cookies = new Cookies();

// Estados
const initialState = {
  user: null,
  userGoogle: null,
  userOurs: null,
  userData: {
    userId: null,
    userName: null,
    userEmail: null,
    userType: null,
  },
};

// Slice Login
const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = true;
      state.userOurs = true;
      state.userData.userId = action.payload.userId;
      state.userData.userName = action.payload.userName;
      state.userData.userType = action.payload.userType;
    },
    resetUserState: (state) => {
      state.user = false;
      state.userOurs = false;
      state.userGoogle = false;
      state.userData.userId = null;
      state.userData.userName = null;
      state.userData.userEmail = null;
      state.userData.userType = null;
      state.userIsLoaded = false; // Reiniciar el estado userIsLoaded
    },
    // Nuevo reducer para obtener la información de la cookie
    getUserDataFromCookie: (state) => {
      const userDataCookie = cookies.get('token');
      if (userDataCookie) {
        const userData = jwt_decode(userDataCookie);
        state.user = true;
        state.userData.userName = userData.nombre;
        state.userData.userType = userData.tipo;
        state.userData.userId = userData.sub;
        //Email:
        const userEmail = cookies.get('OursUserEmail');
        state.userData.userEmail = userEmail;
      }
    },
    saveUserEmail: (state, action) => {
      cookies.set('OursUserEmail', action.payload, { path: '/' });
      state.userData.userEmail = action.payload;
    },

    //*Google Login - Guardar Data en Cookies

    saveUserDataToCookie: (state, action) => {
      const { nombre, correo, id } = action.payload;
      cookies.set('idGoogle', id, { path: '/', overwrite: true });
      cookies.set('nombreGoogle', nombre, { path: '/', overwrite: true });
      cookies.set('correoGoogle', correo, { path: '/', overwrite: true });
      state.user = true;
      state.userGoogle = true;
      state.userData.userId = id;
      state.userData.userName = nombre;
      state.userData.userEmail = correo;
    },
    //*Google Login - Tomar Cookies y Ponerlas en Estado
    updateUserDataFromCookie: (state) => {
      //No traigo data porque lo recibo en cookies (miremos si funciona o si me la traigo del Nav).
      const userIdCookie = cookies.get('idGoogle');
      const userNameCookie = cookies.get('nombreGoogle');
      const userEmailCookie = cookies.get('correoGoogle');
      if (userNameCookie) {
        state.user = true;
        state.userGoogle = true;
        state.userData.userId = userIdCookie;
        state.userData.userName = userNameCookie;
        state.userData.userEmail = userEmailCookie;
      }
    },
  },
});

export const {
  setUser,
  saveUserEmail,
  resetUserState,
  getUserDataFromCookie,
  saveUserDataToCookie,
  updateUserDataFromCookie,
} = userSlice.actions;

export default userSlice.reducer;
