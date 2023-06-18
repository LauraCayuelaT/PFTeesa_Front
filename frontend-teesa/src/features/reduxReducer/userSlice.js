import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import axios from 'axios';

const cookies = new Cookies();

//userProfile
export const putUser = createAsyncThunk('user/putUser', async (payload) => {
  try {
    const { userName, userNit, userAddress, userPhone, userId, userType, userEmail } = payload;
    const nombre = userName;
    const nit = userNit;
    const direccion = userAddress;
    const telefono = userPhone;
    const tipo=userType
    const correo=userEmail
    console.log("Esto es payload en userSlice", payload);
    console.log(nit)
    console.log(nombre)
    console.log(direccion)
    console.log(telefono)
    const sub=userId
    
    const response = await axios.put(`https://servidor-teesa.onrender.com/user/${userId}`,  {
      nombre, nit, direccion, telefono, tipo, correo, sub
    });

    console.log(response)
    Swal.fire({
      title: 'A!',
      text: 'Has ingresado a tu cuenta con éxito.',
      icon: 'success',
      confirmButtonText: 'Ok.',
      confirmButtonColor: '#192C8C',
    });
    console.log("Esto es el response", response);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    Swal("Error", "Hubo un error al actualizar su información, intentelo de nuevo", "error");
    throw error;
  }
});

// Estados
const initialState = {
  user: null,
  userData: {
    userId: null,
    userName: null,
    userType: null,
    userEmail: null,
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
  //     userEmail: null,
  //   userNit: null,
  //   userAddress: null,
  //   userPhone: null,
  // },
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
      state.userData.userId = null;
      state.userData.userName = null;
      state.userData.userType = null;
      state.userData.userEmail = null
      state.userData.userNit = null
      state.userData.userAddress = null
      state.userData.userPhone = null
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
        state.userData.userEmail = userData.correo;
        state.userData.userNit = userData.nit;
        state.userData.userAddress = userData.direccion;
        state.userData.userPhone = userData.telefono;
      }
    },

    //*Google Login
    saveUserNameToCookie: (state, action) => {
      const { nombre } = action.payload;
      cookies.set('nombreGoogle', nombre, { path: '/', overwrite: true });
      state.user = true;
      state.userData.userName = nombre;
    },
    getUserNameFromCookie: (state) => {
      const userNameCookie = cookies.get('nombreGoogle');
      if (userNameCookie) {
        state.user = true;
        state.userData.userName = userNameCookie;
      }
    },
  },
});

export const {
  setUser,
  resetUserState,
  getUserDataFromCookie,
  saveUserNameToCookie,
  getUserNameFromCookie,
} = userSlice.actions;

export default userSlice.reducer;
