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
};

// Login Back:
export const loginUser = createAsyncThunk(
  'product/loginUser',
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
  },
});

export const { resetLoginState } = loginSlice.actions;
export default loginSlice.reducer;
