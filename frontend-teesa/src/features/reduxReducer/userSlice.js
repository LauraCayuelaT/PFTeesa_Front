import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import axios from 'axios';

const cookies = new Cookies();

//* PUT: userProfile - Token

export const putUser = createAsyncThunk('user/putUser', async (payload) => {
  try {
    const {
      userName,
      userNit,
      userAddress,
      userPhone,
      userId,
      // userType,
      // userEmail,
    } = payload;
    const nombre = userName;
    const nit = userNit;
    const direccion = userAddress;
    const telefono = userPhone;

    const response = await axios.put(
      `https://servidor-teesa.onrender.com/user/${userId}`,
      {
        nombre,
        nit,
        direccion,
        telefono,
      }
    );
    delete response.config.transformResponse;
    delete response.headers;
    delete response.config.transformRequest;

    console.log('Respuesta de la solicitud PUT:', response);
    Swal.fire({
      title: 'Cambios realizados',
      text: 'Tus cambios se realizaron con éxito 😁.',
      icon: 'success',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });

    return response;
  } catch (error) {
    console.log('error', error.response.data.message);
    Swal(
      'Error',
      'Hubo un error al actualizar su información, intentelo de nuevo',
      'error'
    );
    throw error;
  }
});

// export const getProducts= createAsyncThunk('user/getProducts', async (payload) => {

//   console.log(UserId)
//   try {
//     const response = await axios.get(`https://servidor-teesa.onrender.com/purchase/${userId}`,{

//     })
//   console.log(response)
//   return response

//   } catch (error) {
//     console.log('ERROR', error.response.data.message);
//     throw error;
//   }

// })

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
    userNit: null,
    userAddress: null,
    userPhone: null,
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
      state.userData.userEmail = action.payload.userEmail;
      state.userData.userNit = action.payload.userNit;
      state.userData.userAddress = action.payload.userAddress;
      state.userData.userPhone = action.payload.userPhone;
    },
    resetUserState: (state) => {
      state.user = false;
      state.userOurs = false;
      state.userGoogle = false;
      state.userData.userId = null;
      state.userData.userName = null;
      state.userData.userEmail = null;
      state.userData.userType = null;
      state.userData.userNit = null;
      state.userData.userAddress = null;
      state.userData.userPhone = null;
      state.userIsLoaded = false; // Reiniciar el estado userIsLoaded
    },
    // Nuevo reducer para obtener la información de la cookie
    getUserDataFromCookie: (state, action) => {
      const userDataCookie = action.payload || cookies.get('token'); // Usar el parámetro action.payload o las cookies existentes
      if (userDataCookie) {
        const userData = jwt_decode(userDataCookie);
        state.user = true;
        state.userData.userName = userData.nombre;
        state.userData.userType = userData.tipo;
        state.userData.userId = userData.sub;
        state.userData.userNit = userData.nit;
        state.userData.userAddress = userData.direccion;
        state.userData.userEmail = userData.correo;
        state.userData.userPhone = userData.telefono;
        // Email:
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
  extraReducers: (builder) => {
    builder.addCase(putUser.fulfilled, (state, action) => {
      const responseData = action.payload.data.token; // Obtener la información actualizada del servidor
      console.log(responseData);
      cookies.set('token', responseData, { path: '/' });
      // Actualizar los estados con la información recibida
      if (responseData) {
        const userData = jwt_decode(responseData);
        console.log('userdata', userData);
        state.user = true;
        state.userData.userName = userData.nombre;
        state.userData.userNit = userData.nit;
        state.userData.userAddress = userData.direccion;
        state.userData.userPhone = userData.telefono;
      }
    });
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
