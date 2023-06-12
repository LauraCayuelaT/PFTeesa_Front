import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';

//Estados
const initialState = {
  loading: false,
  error: null,
  errorMessage: '',
  success: false,
  token: '',
  googleAuthLink: 'https://servidor-teesa.onrender.com/auth/google/login',
  googleUser: null,
};

// Login Back:
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async ({ correo, contrasena }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://servidor-teesa.onrender.com/login',
        { correo, contrasena }
      );
      const cookies = new Cookies();
      cookies.set('token', response.data.token, { path: '/' });
      return response.data.token;
    } catch (error) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

//Login Google:

export const fetchGoogleProfile = createAsyncThunk(
  'login/fetchGoogleProfile',
  async () => {
    try {
      const response = await axios.get(
        'https://servidor-teesa.onrender.com/auth/google/perfil'
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
);

// Slice Login
const loginSlice = createSlice({
  name: 'loginState',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    // Acciones relacionadas con el inicio de sesión
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorMessage = null; // Reiniciar el mensaje de error
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.success = true; // Activar el estado de éxito
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
    //Google Data
    builder.addCase(fetchGoogleProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.errorMessage = null;
    });
    builder.addCase(fetchGoogleProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.googleUser = action.payload; // Actualizar el estado con los datos del usuario de Google
      console.log(state.googleUser);
    });
    builder.addCase(fetchGoogleProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
  },
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
